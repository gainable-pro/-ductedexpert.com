"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, ChevronLeft, Loader2, Save, X, Plus, Trash2, Sparkles, Mic, Camera, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/layout/language-provider";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";

interface ArticleSection {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    showSubtitle: boolean;
    list: string[];
    imageUrl?: string;
    imageAlt?: string;
}

interface FAQItem {
    id: string;
    question: string;
    response: string;
}

export default function NewArticlePage() {
    const router = useRouter();
    const { locale } = useLanguage();
    const d = getDashboardDictionary(locale);

    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationProgress, setGenerationProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const [topic, setTopic] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [altText, setAltText] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [targetCity, setTargetCity] = useState("");
    const [metaDesc, setMetaDesc] = useState("");

    const [sections, setSections] = useState<ArticleSection[]>([
        { id: '1', title: '', subtitle: '', content: '', showSubtitle: false, list: [], imageUrl: '', imageAlt: '' }
    ]);

    const [faq, setFaq] = useState<FAQItem[]>([
        { id: '1', question: '', response: '' },
        { id: '2', question: '', response: '' }
    ]);

    const slugify = (text: string) => {
        return text.toString().toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-").replace(/[^\w\-]+/g, "")
            .replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };

    const handleGenerate = async () => {
        if (!topic.trim()) {
            setError(d.articles.topicLabel);
            return;
        }

        setIsGenerating(true);
        setGenerationProgress(0);
        setError(null);

        const progressInterval = setInterval(() => {
            setGenerationProgress(prev => {
                if (prev >= 92) return prev;
                const step = prev < 50 ? 5 : prev < 75 ? 2 : 1;
                return Math.min(prev + step, 95);
            });
        }, 800);

        try {
            const res = await fetch("/api/dashboard/articles/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic, locale })
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Generation error");
            }

            const data = await res.json();

            setTitle(data.title || "");
            setSlug(data.slug || slugify(data.title || ""));
            setTargetCity(data.targetCity || "");
            setMetaDesc(data.metaDesc || "");
            setIntroduction(data.introduction || "");
            if (data.imageUrl) {
                setMainImage(data.imageUrl);
            }

            if (data.sections && Array.isArray(data.sections)) {
                const newSections = data.sections.map((s: any, idx: number) => ({
                    id: Date.now().toString() + idx,
                    title: s.title || "",
                    subtitle: s.title || "",
                    content: s.content || "",
                    showSubtitle: true,
                    list: [],
                    imageUrl: "",
                    imageAlt: ""
                }));
                setSections(newSections);
            }

            if (data.faq && Array.isArray(data.faq)) {
                const newFaq = data.faq.map((f: any, idx: number) => ({
                    id: Date.now().toString() + idx,
                    question: f.question || f.q || "",
                    response: f.response || f.r || ""
                }));
                setFaq(newFaq);
            }
        } catch (err: any) {
            console.error(err);
            setError(err.message || "AI Generation Error");
        } finally {
            clearInterval(progressInterval);
            setGenerationProgress(100);
            setTimeout(() => {
                setIsGenerating(false);
                setGenerationProgress(0);
            }, 500);
        }
    };

    const handleVoiceInput = () => {
        if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            const speechLangMap: Record<string, string> = {
                en: 'en-US',
                de: 'de-DE',
                fi: 'fi-FI',
                es: 'es-ES',
                it: 'it-IT',
            };
            recognition.lang = speechLangMap[locale] || 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            recognition.onerror = () => setIsListening(false);

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setTopic((prev) => (prev ? prev + " " + transcript : transcript));
            };

            recognition.start();
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTitle(val);
        if (!slug || slug === slugify(title)) {
            setSlug(slugify(val));
        }
    };

    const compressImage = async (file: File): Promise<File> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 1200;
                    let width = img.width;
                    let height = img.height;

                    if (width > MAX_WIDTH) {
                        height = Math.round((height * MAX_WIDTH) / width);
                        width = MAX_WIDTH;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        if (blob) {
                            const newFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });
                            resolve(newFile);
                        } else reject(new Error("Canvas blob failed"));
                    }, 'image/jpeg', 0.8);
                };
                img.onerror = (err) => reject(err);
            };
            reader.onerror = (err) => reject(err);
        });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files?.[0];
        if (!file) return;

        try {
            if (file.type.startsWith('image/')) {
                file = await compressImage(file);
            }
        } catch (err) {
            console.error("Compression warning:", err);
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "articles");

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData
            });

            if (!res.ok) throw new Error("Upload error");
            const data = await res.json();
            setMainImage(data.url);
        } catch (err) {
            console.error(err);
            setError("Image upload error");
        } finally {
            setIsUploading(false);
        }
    };

    const handleSectionImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let file = e.target.files?.[0];
        if (!file) return;

        try {
            if (file.type.startsWith('image/')) {
                file = await compressImage(file);
            }
        } catch (err) {
            console.error("Compression warning:", err);
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "articles");

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData
            });

            if (!res.ok) throw new Error("Upload error");
            const data = await res.json();

            const newSections = [...sections];
            newSections[index].imageUrl = data.url;
            setSections(newSections);
        } catch (err) {
            console.error(err);
            setError("Section image upload error");
        } finally {
            setIsUploading(false);
        }
    };

    const addSection = () => {
        setSections([...sections, {
            id: Date.now().toString(),
            title: '',
            subtitle: '',
            content: '',
            showSubtitle: false,
            list: [],
            imageUrl: '',
            imageAlt: ''
        }]);
    };

    const updateSection = (index: number, field: keyof ArticleSection, value: any) => {
        const newSections = [...sections];
        newSections[index] = { ...newSections[index], [field]: value };
        setSections(newSections);
    };

    const removeSection = (index: number) => {
        if (sections.length <= 1) return;
        const newSections = [...sections];
        newSections.splice(index, 1);
        setSections(newSections);
    };

    const moveSection = (index: number, direction: 'up' | 'down') => {
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === sections.length - 1)) return;
        const newSections = [...sections];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        [newSections[index], newSections[swapIndex]] = [newSections[swapIndex], newSections[index]];
        setSections(newSections);
    };

    const addFaq = () => {
        setFaq([...faq, { id: Date.now().toString(), question: '', response: '' }]);
    };

    const updateFaq = (index: number, field: keyof FAQItem, value: string) => {
        const newFaq = [...faq];
        newFaq[index] = { ...newFaq[index], [field]: value };
        setFaq(newFaq);
    };

    const removeFaq = (index: number) => {
        if (faq.length <= 1) return;
        const newFaq = [...faq];
        newFaq.splice(index, 1);
        setFaq(newFaq);
    };

    const handleSubmit = async (status: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/dashboard/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    slug,
                    introduction,
                    mainImage,
                    altText,
                    videoUrl,
                    targetCity,
                    metaDesc,
                    sections,
                    faq,
                    status
                })
            });

            const data = await res.json();

            if (!res.ok) {
                if (Array.isArray(data.error)) {
                    setError(data.error.map((e: any) => e.message).join(", "));
                } else {
                    setError(data.error || "An error occurred");
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            router.push("/dashboard/articles");
            router.refresh();
        } catch {
            setError("Server connection error");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsLoading(false);
        }
    };

    const wordCount = (title + introduction + sections.map(s => s.title + s.content).join("") + faq.map(f => f.question + f.response).join("")).split(/\s+/).filter(Boolean).length;
    let score = 0;
    if (wordCount > 500) score += 40; else score += Math.round((wordCount / 500) * 40);
    if (sections.length >= 3) score += 30; else score += sections.length * 10;
    if (faq.length >= 2) score += 20;
    if (mainImage) score += 10;
    if (score > 100) score = 100;

    return (
        <div className="max-w-5xl mx-auto pb-[120px] md:pb-24 space-y-6">
            {/* Header */}
            <div className="mb-4 flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ChevronLeft className="w-5 h-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">{d.articles.newArticleTitle}</h1>
                    <p className="text-slate-500">{d.articles.newArticleSubtitle}</p>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 border border-red-100">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>{error}</div>
                </div>
            )}

            {/* AI GENERATION CARD */}
            <Card className="bg-slate-50 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                        {d.articles.aiBoxTitle}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 md:items-end">
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="ai-topic">{d.articles.topicLabel}</Label>
                            <div className="relative">
                                <Input
                                    id="ai-topic"
                                    placeholder={d.articles.topicPlaceholder}
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    className="bg-white pr-10"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 ${isListening ? 'text-red-500 animate-pulse' : 'text-slate-400 hover:text-slate-600'}`}
                                    onClick={handleVoiceInput}
                                >
                                    <Mic className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <Button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full md:min-w-[240px] md:w-auto relative overflow-hidden"
                            type="button"
                        >
                            {isGenerating && (
                                <div
                                    className="absolute inset-0 bg-blue-500/50 transition-all duration-500 ease-out"
                                    style={{ width: `${generationProgress}%` }}
                                />
                            )}
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>{d.articles.generatingBtn} ({generationProgress}%)</span>
                                    </>
                                ) : (
                                    <span>{d.articles.generateAiBtn}</span>
                                )}
                            </div>
                        </Button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                        {d.articles.aiBoxSubtitle}
                    </p>
                </CardContent>
            </Card>

            {/* SEO SCORE */}
            <Card className="bg-slate-50 border-slate-200">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-left shrink-0">
                            <div className="text-4xl font-bold text-[#D59B2B]">{score}%</div>
                            <div className="text-xs font-medium px-2 py-1 bg-white rounded-full inline-block mt-1 border">
                                SEO Score
                            </div>
                        </div>
                        <div className="flex-1 w-full space-y-3">
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden w-full">
                                <div className="h-full bg-[#D59B2B] transition-all duration-500 ease-out" style={{ width: `${score}%` }}></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-600">
                                <div className="bg-white p-2 rounded border flex flex-col items-center justify-center">
                                    <span className="text-slate-400 mb-1">Words</span>
                                    <span className="font-bold">{wordCount} {wordCount >= 500 ? '✅' : '⚠️'}</span>
                                </div>
                                <div className="bg-white p-2 rounded border flex flex-col items-center justify-center">
                                    <span className="text-slate-400 mb-1">Sections</span>
                                    <span className="font-bold">{sections.length} {sections.length >= 3 ? '✅' : '⚠️'}</span>
                                </div>
                                <div className="bg-white p-2 rounded border flex flex-col items-center justify-center">
                                    <span className="text-slate-400 mb-1">FAQ</span>
                                    <span className="font-bold">{faq.length} {faq.length >= 2 ? '✅' : '⚠️'}</span>
                                </div>
                                <div className="bg-white p-2 rounded border flex flex-col items-center justify-center">
                                    <span className="text-slate-400 mb-1">Image</span>
                                    <span className="font-bold">{mainImage ? '✅' : '⚠️'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-8">
                {/* 1. GENERAL SEO INFO */}
                <Card>
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                        <CardTitle className="text-base text-slate-800">{d.articles.generalSectionTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>{d.articles.articleTitleLabel} <span className="text-red-500">*</span></Label>
                            <Input
                                value={title}
                                onChange={handleTitleChange}
                                className="font-bold text-lg"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Slug (URL) <span className="text-red-500">*</span></Label>
                                <div className="flex items-center">
                                    <div className="bg-slate-100 border border-r-0 border-slate-200 px-3 py-2 text-sm text-slate-500 rounded-l-md">/articles/</div>
                                    <Input
                                        value={slug}
                                        onChange={(e) => setSlug(slugify(e.target.value))}
                                        className="rounded-l-none font-mono text-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>{d.articles.targetCityLabel}</Label>
                                <Input
                                    value={targetCity}
                                    onChange={(e) => setTargetCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                            <Label>{d.articles.metaDescLabel}</Label>
                            <Textarea
                                value={metaDesc}
                                onChange={(e) => setMetaDesc(e.target.value)}
                                className="h-20 bg-white"
                            />
                            <div className={`text-xs text-right ${metaDesc.length > 160 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
                                {metaDesc.length} / 160
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* COVER IMAGE */}
                <Card>
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                        <CardTitle className="text-base text-slate-800">{d.articles.mediaSeoTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>{d.articles.coverImageLabel}</Label>
                                <input
                                    type="file"
                                    ref={galleryInputRef}
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <input
                                    type="file"
                                    ref={cameraInputRef}
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    accept="image/*"
                                    capture="environment"
                                />
                                {!mainImage ? (
                                    <div
                                        onClick={() => galleryInputRef.current?.click()}
                                        className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{d.articles.coverImageLabel}</span>
                                    </div>
                                ) : (
                                    <div className="relative rounded-xl overflow-hidden border border-slate-200 group">
                                        <img src={mainImage} alt="Preview" className="w-full h-40 object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <Button size="sm" variant="secondary" onClick={() => galleryInputRef.current?.click()}><ImageIcon className="w-4 h-4 mr-1"/></Button>
                                            <Button size="sm" variant="destructive" onClick={() => setMainImage("")}><X className="w-4 h-4" /></Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Alt Text (SEO)</Label>
                                    <Input
                                        value={altText}
                                        onChange={(e) => setAltText(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* INTRODUCTION */}
                <Card>
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                        <CardTitle className="text-base text-slate-800">{d.articles.introLabel}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Textarea
                            className="min-h-[100px] text-base leading-relaxed"
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}
                        />
                    </CardContent>
                </Card>

                {/* SECTIONS */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg text-slate-800">{d.articles.bodySectionTitle}</h2>
                        <span className="text-sm text-slate-500">{sections.length}</span>
                    </div>

                    {sections.map((section, index) => (
                        <Card key={section.id} className="relative group overflow-hidden border-slate-200 shadow-sm">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-4 flex-1">
                                        <Input
                                            placeholder={`${d.articles.sectionHeadingLabel} ${index + 1}`}
                                            className="font-bold text-lg"
                                            value={section.title}
                                            onChange={(e) => updateSection(index, 'title', e.target.value)}
                                        />
                                        <Textarea
                                            placeholder={d.articles.sectionContentLabel}
                                            className="min-h-[150px] resize-y"
                                            value={section.content}
                                            onChange={(e) => updateSection(index, 'content', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Button variant="ghost" size="icon" onClick={() => moveSection(index, 'up')} disabled={index === 0}>
                                            <ChevronLeft className="w-4 h-4 rotate-90" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => removeSection(index)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => moveSection(index, 'down')} disabled={index === sections.length - 1}>
                                            <ChevronLeft className="w-4 h-4 -rotate-90" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    <Button onClick={addSection} variant="outline" className="w-full py-6 border-dashed border-2">
                        <Plus className="w-5 h-5 mr-2" />
                        {d.articles.addSectionBtn}
                    </Button>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    <h2 className="font-bold text-lg text-slate-800">{d.articles.faqSectionTitle}</h2>
                    {faq.map((item, index) => (
                        <Card key={item.id} className="border-l-4 border-l-green-500 bg-green-50/30">
                            <CardContent className="pt-4 space-y-3">
                                <div className="flex justify-between items-start">
                                    <Label className="text-green-700 font-bold">{d.articles.questionLabel} {index + 1}</Label>
                                    <Button variant="ghost" size="sm" onClick={() => removeFaq(index)} className="h-6 w-6 p-0 text-green-700"><X className="w-4 h-4" /></Button>
                                </div>
                                <Input
                                    placeholder={d.articles.questionLabel}
                                    className="bg-white"
                                    value={item.question}
                                    onChange={(e) => updateFaq(index, 'question', e.target.value)}
                                />
                                <Textarea
                                    placeholder={d.articles.answerLabel}
                                    className="bg-white min-h-[80px]"
                                    value={item.response}
                                    onChange={(e) => updateFaq(index, 'response', e.target.value)}
                                />
                            </CardContent>
                        </Card>
                    ))}
                    <Button variant="outline" onClick={addFaq} className="w-full text-green-700 border-green-200 hover:bg-green-50">
                        <Plus className="w-4 h-4 mr-2" /> {d.articles.addQuestionBtn}
                    </Button>
                </div>

                {/* ACTIONS */}
                <div className="sticky bottom-[80px] md:bottom-6 pt-4 z-40">
                    <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto">
                        <Button className="w-full md:w-auto bg-[#D59B2B] hover:bg-[#b88622] text-white font-bold px-8" onClick={() => handleSubmit('PUBLISHED')} disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                            {d.articles.publishBtn}
                        </Button>
                        <Button variant="outline" className="w-full md:w-auto px-8" onClick={() => handleSubmit('DRAFT')} disabled={isLoading}>
                            {d.articles.saveDraftBtn}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
