"use client";

import { useLanguage } from "@/components/layout/language-provider";

export function VisionSection() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full min-h-[540px] py-16 flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/relation-pro-client.png")',
                    backgroundPosition: 'center 40%'
                }}
            />
            <div className="absolute inset-0 z-10 bg-slate-900/80" />

            <div className="relative z-20 container mx-auto px-4 flex justify-center">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-thin text-white uppercase tracking-wider">
                            {t.signup.visionTitle}
                        </h2>
                    </div>

                    <div className="text-slate-300 space-y-4 text-justify md:text-center leading-relaxed max-w-3xl mx-auto">
                        <p>{t.signup.visionP1}</p>
                        <p>{t.signup.visionP2}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-left max-w-2xl mx-auto shadow-2xl relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D59B2B]" />

                        <p className="font-bold text-white mb-4">
                            {t.signup.visionBoxTitle}
                        </p>
                        <ul className="space-y-2 text-slate-200 text-sm md:text-base">
                            {t.signup.visionBullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-[#D59B2B] mt-1">👉</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
