import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { generateExpertMetaTitle, generateExpertMetaDescription } from "@/lib/seo-templates";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            email, password, expertType,
            representativeName, nomEntreprise, description,
            website, linkedin, telephone,
            adresse, ville, codePostal, pays, siret, tvaNumber, codeApe,
            technologies, interventionsClim, interventionsEtude,
            batiments, marques, certifications
        } = body;

        // No SIRET or APE code verification on DuctedExpert.com (international open registration)
        let mappedExpertType = expertType;
        if (expertType === 'societe') mappedExpertType = 'cvc_climatisation';
        else if (expertType === 'bureau_etude') mappedExpertType = 'bureau_detude';
        else mappedExpertType = 'cvc_climatisation';

        // 1. Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "This email is already registered." },
                { status: 400 }
            );
        }

        // 2. Hash password
        const hashedPassword = await hash(password, 10);

        // 3. Create User and Expert in a transaction
        const result = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    password_hash: hashedPassword,
                    role: "PRO",
                },
            });

            const nameParts = (representativeName || "").trim().split(" ");
            const nomRep = nameParts.length > 1 ? nameParts.slice(1).join(" ") : (nameParts[0] || nomEntreprise);
            const prenomRep = nameParts.length > 1 ? nameParts[0] : "";

            let activityKey = 'ducted-hvac-expert';
            if (expertType === 'societe') activityKey = 'ducted-air-conditioning-heat-pump';
            else if (expertType === 'bureau_etude') activityKey = 'hvac-thermal-engineering';

            const sluggify = (s: string) => s.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            const baseSlug = `${activityKey}-${sluggify(ville || 'global')}-${sluggify(nomEntreprise || 'expert')}`;
            const randomSuffix = Math.floor(Math.random() * 10000);
            const finalSlug = `${baseSlug}-${randomSuffix}`;

            const expert = await tx.expert.create({
                data: {
                    user_id: user.id,
                    expert_type: mappedExpertType,
                    nom_entreprise: nomEntreprise,
                    representant_nom: nomRep,
                    representant_prenom: prenomRep,
                    description: description || "",
                    site_web: website || null,
                    linkedin: linkedin || null,
                    telephone: telephone || null,
                    adresse: adresse || "",
                    ville: ville || "",
                    code_postal: codePostal || "",
                    pays: pays || "United Kingdom",
                    siret: siret || null,
                    tva_number: tvaNumber || null,
                    ape_code: codeApe || null,
                    metaTitle: generateExpertMetaTitle({ nomEntreprise, ville, codePostal }),
                    metaDesc: generateExpertMetaDescription({ nomEntreprise, ville, codePostal, description }),
                    slug: finalSlug,
                    status: 'active',
                },
            });

            if (batiments && batiments.length > 0) {
                await tx.expertBatiment.createMany({
                    data: batiments.map((b: string) => ({
                        expert_id: expert.id,
                        value: b
                    }))
                });
            }

            if (expertType === 'societe') {
                if (technologies?.length) {
                    await tx.expertTechnology.createMany({
                        data: technologies.map((t: string) => ({ expert_id: expert.id, value: t }))
                    });
                }
                if (interventionsClim?.length) {
                    await tx.expertInterventionClim.createMany({
                        data: interventionsClim.map((i: string) => ({ expert_id: expert.id, value: i }))
                    });
                }
                if (marques?.length) {
                    await tx.expertMarque.createMany({
                        data: marques.map((m: string) => ({ expert_id: expert.id, value: m }))
                    });
                }
                if (certifications?.length) {
                    await tx.expertCertification.createMany({
                        data: certifications.map((c: string) => ({ expert_id: expert.id, value: c }))
                    });
                }
            }

            if (expertType === 'bureau_etude') {
                if (interventionsEtude?.length) {
                    await tx.expertInterventionEtude.createMany({
                        data: interventionsEtude.map((i: string) => ({ expert_id: expert.id, value: i }))
                    });
                }
            }

            return { user, expert };
        });

        // Welcome email via Resend (non-blocking)
        try {
            if (process.env.RESEND_API_KEY) {
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: "DuctedExpert.com <conseil@gainable.ch>",
                    to: email,
                    subject: "Welcome to DuctedExpert.com – Registration Confirmed",
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
                            <h1 style="color: #1F2D3D;">Welcome to DuctedExpert.com</h1>
                            <p>Your professional account for <strong>${nomEntreprise}</strong> has been created.</p>
                            <p>You can now sign in to your dashboard to manage your profile, photos, and client leads.</p>
                        </div>
                    `
                });
            }
        } catch (emailError) {
            console.error("Failed to send welcome email:", emailError);
        }

        return NextResponse.json(
            { message: "Account created successfully", userId: result.user.id, expertId: result.expert.id },
            { status: 201 }
        );

    } catch (error: any) {
        console.error("Registration Error:", error);
        return NextResponse.json(
            { message: "Technical error: " + (error.message || error) },
            { status: 500 }
        );
    }
}
