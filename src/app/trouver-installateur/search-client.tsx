"use client";

import { ProCard } from "@/components/features/pro-card";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCcw, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, Suspense, useRef, useId } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import {
    EXPERT_TECHNOLOGIES,
    EXPERT_BATIMENTS,
} from "@/lib/constants";
import { ContactWizard } from "@/components/features/contact/contact-wizard";
import { NoResultsForm } from "./no-results-form";
import { useLanguage } from "@/components/layout/language-provider";
import { INTERNATIONAL_COUNTRIES, translateTerm } from "@/lib/i18n";
import { CountryFlag } from "@/components/ui/country-flag";

const SearchMap = dynamic(() => import("@/components/features/search-map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-slate-200 animate-pulse flex items-center justify-center text-slate-400">
            Loading map...
        </div>
    )
});

function FilterDropdown({ label, children, active = false }: { label: string, children: React.ReactNode, active?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();
    const dropdownId = `dropdown-${id}`;

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={dropdownId}
                className={`flex items-center gap-2 px-4 h-10 rounded-md border text-sm font-medium transition-colors ${isOpen || active ? 'border-[#D59B2B] bg-[#FFF8ED] text-[#D59B2B]' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'}`}
            >
                {label}
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} aria-hidden="true" />
                    <div
                        id={dropdownId}
                        role="listbox"
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 z-20 p-4 max-h-[80vh] overflow-y-auto focus:outline-none"
                    >
                        {children}
                    </div>
                </>
            )}
        </div>
    );
}

function SearchPageContent({ initialExperts, initialView }: { initialExperts: any[], initialView: { center: number[], zoom: number } }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const { locale, t } = useLanguage();

    const getParam = (key: string) => searchParams?.get(key);
    const getListParam = (key: string) => searchParams?.get(key)?.split(',').filter(Boolean) || [];

    const filterParam = searchParams?.get('filter');
    const typeParams = searchParams?.getAll('type') || [];

    const isDefault = typeParams.length === 0 && !filterParam;
    const initialSociete = isDefault || typeParams.includes('societe');
    const initialBureau = isDefault || typeParams.includes('bureau') || filterParam === 'bureau_etude';

    // Only Societe (Climatisation/HVAC) and Bureau d'étude (NO Diagnostic Immobilier)
    const [expertFilters, setExpertFilters] = useState({
        societe: initialSociete,
        bureau: initialBureau,
    });

    const [locationFilter, setLocationFilter] = useState(getParam('city') || "");
    const [countryFilter, setCountryFilter] = useState(getParam('country') || "");
    const [selectedTechs, setSelectedTechs] = useState<string[]>(getListParam('technologies'));
    const [selectedBatiments, setSelectedBatiments] = useState<string[]>(getListParam('batiments'));

    const [experts, setExperts] = useState<any[]>(initialExperts);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedExperts, setSelectedExperts] = useState<any[]>([]);
    const [searchCoords, setSearchCoords] = useState<[number, number] | undefined>(undefined);

    const toggleExpertSelection = (expert: any) => {
        if (selectedExperts.find(e => e.id === expert.id)) {
            setSelectedExperts(prev => prev.filter(e => e.id !== expert.id));
        } else {
            if (selectedExperts.length >= 5) {
                alert(t.home.maxSelectionAlert);
                return;
            }
            setSelectedExperts(prev => [...prev, expert]);
        }
    };

    const fetchExperts = async () => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams();

            const testLat = searchParams?.get('testLat');
            const testLng = searchParams?.get('testLng');
            if (testLat) params.append('testLat', testLat);
            if (testLng) params.append('testLng', testLng);

            if (expertFilters.societe) params.append('type', 'societe');
            if (expertFilters.bureau) params.append('type', 'bureau');

            if (locationFilter) {
                params.append('city', locationFilter);
                try {
                    const query = locationFilter + (countryFilter ? `, ${countryFilter}` : "");
                    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
                    if (geoRes.ok) {
                        const geoData = await geoRes.json();
                        if (geoData && geoData.length > 0) {
                            const lat = parseFloat(geoData[0].lat);
                            const lng = parseFloat(geoData[0].lon);
                            params.append('lat', lat.toString());
                            params.append('lng', lng.toString());
                            setSearchCoords([lat, lng]);
                        } else {
                            setSearchCoords(undefined);
                        }
                    }
                } catch (e) {
                    console.error("Geocoding failed for search:", e);
                }
            }
            if (countryFilter) params.append('country', countryFilter);
            if (selectedTechs.length) params.append('technologies', selectedTechs.join(','));
            if (selectedBatiments.length) params.append('batiments', selectedBatiments.join(','));

            router.replace(`${pathname}?${params.toString()}`, { scroll: false });

            const res = await fetch(`/api/experts/search?${params.toString()}`);
            if (res.ok) {
                const data = await res.json();
                setExperts(data);
            }
        } catch (error) {
            console.error("Error fetching experts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const timer = setTimeout(() => {
            fetchExperts();
        }, 300);
        return () => clearTimeout(timer);
    }, [expertFilters, locationFilter, countryFilter, selectedTechs, selectedBatiments, pathname, router]);

    const handleExpertChange = (key: keyof typeof expertFilters) => {
        setExpertFilters(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const triggerSearch = () => {
        fetchExperts();
    };

    const [showMobileFilters, setShowMobileFilters] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            {/* --- TOP FILTER BAR --- */}
            <div className="bg-white border-b border-slate-100 shadow-sm sticky top-[80px] md:top-[96px] z-30 transition-all">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

                        {/* Mobile Toggle & Label */}
                        <div className="flex items-center justify-between w-full lg:w-auto lg:hidden">
                            <span className="text-sm font-bold text-[#1F2D3D]">{t.home.filterLabel}</span>
                            <button
                                onClick={() => setShowMobileFilters(!showMobileFilters)}
                                aria-expanded={showMobileFilters}
                                className="flex items-center gap-2 text-sm font-medium text-[#D59B2B] border border-[#D59B2B] px-3 py-1.5 rounded-md"
                            >
                                <Filter className="w-4 h-4" />
                                {showMobileFilters ? t.home.hideFilters : t.home.showFilters}
                            </button>
                        </div>

                        {/* Filters List */}
                        <div className={`${showMobileFilters ? 'flex' : 'hidden'} lg:flex flex-wrap items-center gap-3 w-full lg:w-auto border-b lg:border-b-0 pb-4 lg:pb-0 border-slate-100 mb-2 lg:mb-0`}>
                            <span className="hidden lg:inline text-sm font-bold text-[#1F2D3D] mr-2">{t.home.filterLabel}</span>

                            {/* Filter 1: Expert Type (Only Climatisation & Bureau d'étude) */}
                            <FilterDropdown label={t.home.expertTypeFilter} active={expertFilters.societe || expertFilters.bureau}>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="rounded accent-[#D59B2B] w-4 h-4"
                                            checked={expertFilters.societe}
                                            onChange={() => handleExpertChange('societe')}
                                        />
                                        <span className={`text-sm ${expertFilters.societe ? 'text-[#D59B2B] font-bold' : 'text-slate-600 font-medium'}`}>
                                            {t.home.hvacCompany}
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="rounded accent-[#D59B2B] w-4 h-4"
                                            checked={expertFilters.bureau}
                                            onChange={() => handleExpertChange('bureau')}
                                        />
                                        <span className={`text-sm ${expertFilters.bureau ? 'text-[#D59B2B] font-bold' : 'text-slate-600'}`}>
                                            {t.home.engineeringOffice}
                                        </span>
                                    </label>
                                </div>
                            </FilterDropdown>

                            {/* Filter 2: Technologies (translated labels, canonical DB values) */}
                            {expertFilters.societe && (
                                <FilterDropdown label={t.home.technologiesFilter} active={selectedTechs.length > 0}>
                                    <div className="space-y-2">
                                        {EXPERT_TECHNOLOGIES.map((canonicalItem) => (
                                            <label key={canonicalItem} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="rounded accent-[#D59B2B] w-4 h-4"
                                                    checked={selectedTechs.includes(canonicalItem)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) setSelectedTechs([...selectedTechs, canonicalItem]);
                                                        else setSelectedTechs(selectedTechs.filter(x => x !== canonicalItem));
                                                    }}
                                                />
                                                <span className="text-sm text-slate-600">
                                                    {translateTerm(canonicalItem, locale)}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </FilterDropdown>
                            )}

                            {/* Filter 3: Building Types (translated labels, canonical DB values) */}
                            <FilterDropdown label={t.home.buildingTypeFilter} active={selectedBatiments.length > 0}>
                                <div className="space-y-2">
                                    {EXPERT_BATIMENTS.map((canonicalItem) => (
                                        <label key={canonicalItem} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="rounded accent-[#D59B2B] w-4 h-4"
                                                checked={selectedBatiments.includes(canonicalItem)}
                                                onChange={(e) => {
                                                    if (e.target.checked) setSelectedBatiments([...selectedBatiments, canonicalItem]);
                                                    else setSelectedBatiments(selectedBatiments.filter(b => b !== canonicalItem));
                                                }}
                                            />
                                            <span className="text-sm text-slate-600">
                                                {translateTerm(canonicalItem, locale)}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </FilterDropdown>

                            {/* Filter 4: Country */}
                            <FilterDropdown label={t.home.countryFilter} active={!!countryFilter}>
                                <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                                    {INTERNATIONAL_COUNTRIES.map((c) => (
                                        <label
                                            key={c.value}
                                            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                                        >
                                            <input
                                                type="checkbox"
                                                className="rounded accent-[#D59B2B] w-4 h-4 shrink-0"
                                                checked={countryFilter === c.value}
                                                onChange={() => setCountryFilter(countryFilter === c.value ? "" : c.value)}
                                            />
                                            <CountryFlag code={c.code} alt={c.value} className="w-5 h-3.5" />
                                            <span className="text-sm font-medium text-slate-700">
                                                {translateTerm(c.value, locale)}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </FilterDropdown>

                            <button
                                aria-label="Reset filters"
                                onClick={() => {
                                    setExpertFilters({ societe: true, bureau: true });
                                    setSelectedTechs([]);
                                    setSelectedBatiments([]);
                                    setLocationFilter("");
                                    setCountryFilter("");
                                }}
                                className="p-2 text-slate-400 hover:text-[#D59B2B] hover:bg-slate-50 rounded-md transition-colors"
                            >
                                <RefreshCcw className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Search Input Group */}
                        <div className="flex items-center gap-2 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-72">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                                <input
                                    type="text"
                                    placeholder={t.home.cityPlaceholder}
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                    aria-label={t.home.cityPlaceholder}
                                    className="w-full pl-10 pr-4 h-10 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D59B2B] focus:border-transparent text-sm"
                                />
                            </div>
                            <Button
                                aria-label={t.home.searchBtn}
                                onClick={triggerSearch}
                                className="bg-[#D59B2B] hover:bg-[#b88622] text-white h-10 px-4 flex items-center gap-2 shadow-sm whitespace-nowrap"
                            >
                                <span className="hidden sm:inline">{t.home.searchBtn}</span>
                                <Filter className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT (Split View) --- */}
            <div className="flex-1 container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

                    {/* --- LEFT: LISTING --- */}
                    <main className="lg:col-span-7 space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-[#1F2D3D]">{t.home.nearbyExperts}</h2>
                        </div>

                        <div className="space-y-4">
                            {isLoading ? (
                                <p>{t.home.loadingExperts}</p>
                            ) : experts.length > 0 ? (
                                experts.map(pro => (
                                    <ProCard
                                        key={pro.id}
                                        id={pro.id}
                                        slug={pro.slug}
                                        {...pro}
                                        selectable={true}
                                        priority={experts.indexOf(pro) < 4}
                                        isSelected={!!selectedExperts.find(e => e.id === pro.id)}
                                        onToggleSelect={() => toggleExpertSelection({
                                            id: pro.id,
                                            nom_entreprise: pro.nom_entreprise || pro.name,
                                            expert_type: pro.expertTypes?.[0] || 'cvc_climatisation',
                                            ville: pro.city
                                        })}
                                        actionButton={
                                            <ContactWizard
                                                preSelectedExperts={[{
                                                    id: pro.id,
                                                    nom_entreprise: pro.nom_entreprise || pro.name,
                                                    expert_type: pro.expertTypes?.[0] || 'cvc_climatisation',
                                                    ville: pro.city
                                                }]}
                                                triggerButton={
                                                    <Button className="w-full bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold">
                                                        {t.home.freeQuote}
                                                    </Button>
                                                }
                                            />
                                        }
                                    />
                                ))
                            ) : (
                                <NoResultsForm location={locationFilter} />
                            )}
                        </div>
                    </main>

                    {/* --- RIGHT: MAP (Sticky) --- */}
                    <aside className="hidden lg:block lg:col-span-5 h-[calc(100vh-200px)] sticky top-[160px]">
                        <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300 shadow-md group">
                            <SearchMap experts={experts} hasLocationFilter={!!locationFilter || !!countryFilter} initialView={initialView} searchCoords={searchCoords} />
                        </div>
                    </aside>
                </div>

                {/* FLOATING ACTION BAR FOR SELECTION */}
                {selectedExperts.length > 0 && (
                    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[5000] w-[95%] max-w-lg">
                        <div className="bg-[#1F2D3D] text-white rounded-xl shadow-2xl p-4 flex items-center justify-between border border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#D59B2B] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
                                    {selectedExperts.length}
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold block">{t.home.selectedPros}</span>
                                    <span className="text-slate-300 text-xs">{t.home.freeNoCommitment}</span>
                                </div>
                            </div>

                            <ContactWizard
                                preSelectedExperts={selectedExperts}
                                triggerButton={
                                    <Button className="bg-white text-[#1F2D3D] hover:bg-slate-100 font-bold px-6">
                                        {t.home.requestQuote}
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function SearchPageClient({ initialExperts = [], initialView }: { initialExperts?: any[], initialView?: { center: number[], zoom: number } }) {
    const safeView = initialView || { center: [48.8566, 2.3522], zoom: 5 };
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SearchPageContent initialExperts={initialExperts} initialView={safeView} />
        </Suspense>
    );
}
