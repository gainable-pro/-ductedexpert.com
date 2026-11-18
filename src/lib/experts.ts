import { Prisma, ExpertType } from "@prisma/client";
import { prisma } from "./prisma";

export type ExpertFilters = {
    q?: string;
    city?: string;
    country?: string;
    types?: string[];
    technologies?: string[];
    batiments?: string[];
    interventions?: string[];
    lat?: number;
    lng?: number;
    ipLat?: number;
    ipLng?: number;
};

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export async function getExperts(filters: ExpertFilters) {
    try {
        // Base filter: active experts, exclude real-estate diagnostics (diagnostics_dpe)
        const where: Prisma.ExpertWhereInput = {
            status: { equals: 'active', mode: 'insensitive' },
            slug: { not: 'gainable-fr' },
            expert_type: { in: [ExpertType.cvc_climatisation, ExpertType.bureau_detude] }
        };

        if (filters.q) {
            where.OR = [
                { nom_entreprise: { contains: filters.q, mode: 'insensitive' } },
                { ville: { contains: filters.q, mode: 'insensitive' } },
                { code_postal: { contains: filters.q } }
            ];
        }

        if (filters.city && (!filters.lat || !filters.lng)) {
            where.AND = [
                ...(where.AND ? (Array.isArray(where.AND) ? where.AND : [where.AND]) : []),
                {
                    OR: [
                        { ville: { contains: filters.city, mode: 'insensitive' } },
                        { national_coverage: true }
                    ]
                }
            ];
        }

        if (filters.country) {
            where.pays = { contains: filters.country, mode: 'insensitive' };
        }

        if (filters.types && filters.types.length > 0) {
            const mappedTypes: ExpertType[] = [];
            if (filters.types.includes('societe')) mappedTypes.push(ExpertType.cvc_climatisation);
            if (filters.types.includes('bureau')) mappedTypes.push(ExpertType.bureau_detude);

            if (mappedTypes.length > 0) {
                where.expert_type = { in: mappedTypes };
            }
        }

        if (filters.technologies && filters.technologies.length > 0) {
            where.technologies = {
                some: {
                    value: { in: filters.technologies }
                }
            };
        }

        if (filters.batiments && filters.batiments.length > 0) {
            where.batiments = {
                some: {
                    value: { in: filters.batiments }
                }
            };
        }

        if (filters.interventions && filters.interventions.length > 0) {
            const expandedInterventions = Array.from(new Set([
                ...filters.interventions,
                ...(filters.interventions.some(i => i.toLowerCase().includes("audit"))
                    ? ["Audit Énergétique", "Audit Energétique", "Audits Énergétiques"]
                    : [])
            ]));
            where.OR = [
                ...(where.OR ? (Array.isArray(where.OR) ? where.OR : [where.OR]) : []),
                { interventions_clim: { some: { value: { in: expandedInterventions } } } },
                { interventions_etude: { some: { value: { in: expandedInterventions } } } },
            ];
        }

        let experts = await prisma.expert.findMany({
            where,
            include: {
                technologies: true,
                interventions_clim: true,
                interventions_etude: true,
                batiments: true,
                marques: true,
                photos: {
                    take: 1
                }
            }
        });

        const hasSearchCoords = filters.lat !== undefined && filters.lng !== undefined;
        const hasIpCoords = filters.ipLat !== undefined && filters.ipLng !== undefined;

        if (hasSearchCoords) {
            const searchLat = filters.lat!;
            const searchLng = filters.lng!;

            experts = experts.filter(expert => {
                if ((expert as any).national_coverage) return true;
                const expLat = expert.lat || 0;
                const expLng = expert.lng || 0;
                if (expLat === 0 && expLng === 0) return false;
                const distKm = getDistance(searchLat, searchLng, expLat, expLng);
                const radius = expert.intervention_radius || 50;
                return distKm <= radius;
            });

            experts.sort((a, b) => {
                const aLat = a.lat || 0;
                const aLng = a.lng || 0;
                const bLat = b.lat || 0;
                const bLng = b.lng || 0;
                const aHasCoords = aLat !== 0 && aLng !== 0;
                const bHasCoords = bLat !== 0 && bLng !== 0;
                if (!aHasCoords && !bHasCoords) return 0;
                if (!aHasCoords) return 1;
                if (!bHasCoords) return -1;
                return getDistance(searchLat, searchLng, aLat, aLng) - getDistance(searchLat, searchLng, bLat, bLng);
            });
        } else if (hasIpCoords) {
            const ipLat = filters.ipLat!;
            const ipLng = filters.ipLng!;

            experts.sort((a, b) => {
                const aLat = a.lat || 0;
                const aLng = a.lng || 0;
                const bLat = b.lat || 0;
                const bLng = b.lng || 0;
                const aHasCoords = aLat !== 0 && aLng !== 0;
                const bHasCoords = bLat !== 0 && bLng !== 0;
                if (!aHasCoords && !bHasCoords) return 0;
                if (!aHasCoords) return 1;
                if (!bHasCoords) return -1;
                return getDistance(ipLat, ipLng, aLat, aLng) - getDistance(ipLat, ipLng, bLat, bLng);
            });
        }

        return experts.map(expert => ({
            id: expert.id,
            slug: expert.slug,
            name: expert.nom_entreprise,
            city: ((expert as any).adresse_indep && (expert as any).ville_inter) ? (expert as any).ville_inter : expert.ville,
            country: expert.pays,
            description: expert.description,
            expertTypes: [expert.expert_type],
            interventions: [
                ...expert.interventions_clim.map(i => i.value),
                ...expert.interventions_etude.map(i => i.value),
            ],
            technologies: expert.technologies.map(t => t.value),
            marques: expert.marques.map(m => m.value),
            logoUrl: expert.logo_url || undefined,
            coverPhoto: expert.photos[0]?.photo_url || undefined,
            telephone: expert.telephone,
            lat: expert.lat || 0,
            lng: expert.lng || 0,
            isLabeled: expert.is_labeled
        }));

    } catch (error) {
        console.error("Error getting experts:", error);
        return [];
    }
}
