import ProfileForm from "@/components/dashboard/profile-form";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import AdminPendingList from "@/components/dashboard/admin-pending-list";
import { getServerLocale } from "@/lib/server-locale";
import { getDashboardDictionary } from "@/lib/dashboard-i18n";
import { withLocalePath } from "@/lib/i18n";

const JWT_SECRET = process.env.JWT_SECRET || "default_super_secret_for_dev_only";

async function getUserSlug() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const expert = await prisma.expert.findUnique({
            where: { user_id: decoded.userId },
            select: { slug: true }
        });
        return expert?.slug;
    } catch {
        return null;
    }
}

export default async function DashboardPage() {
    const slug = await getUserSlug();
    const locale = await getServerLocale();
    const d = getDashboardDictionary(locale);

    return (
        <div className="space-y-6">
            {/* ADMIN ONLY: PENDING VALIDATIONS (Same validation & control process as Gainable.fr) */}
            <AdminPendingList />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#1F2D3D]">{d.profile.pageTitle}</h2>
                    <p className="text-slate-500">{d.profile.pageSubtitle}</p>
                </div>
                {slug && (
                    <Link href={withLocalePath(`/pro/${slug}`, locale)} target="_blank">
                        <Button variant="outline" className="gap-2 text-[#D59B2B] border-[#D59B2B] hover:bg-[#D59B2B]/10">
                            <ExternalLink className="w-4 h-4" />
                            {d.profile.viewOnlineBtn}
                        </Button>
                    </Link>
                )}
            </div>

            <ProfileForm />
        </div>
    );
}
