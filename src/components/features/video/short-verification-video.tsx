"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale } from "@/lib/i18n";

interface ShortVerificationVideoProps {
  className?: string;
  forceLocale?: Locale;
}

const SHORT_VIDEO_BY_LOCALE: Record<Locale, string> = {
  en: "/videos/ductedexpert-short-en.mp4",
  de: "/videos/ductedexpert-short-de.mp4",
  es: "/videos/ductedexpert-short-es.mp4",
  it: "/videos/ductedexpert-short-it.mp4",
  fi: "/videos/ductedexpert-short-fi.mp4",
  ar: "/videos/ductedexpert-short-ar.mp4",
};

interface ShortVideoMetadata {
  name: string;
  description: string;
  duration: string;
  sectionTitle: string;
  badgeText: string;
}

const SHORT_METADATA: Record<Locale, ShortVideoMetadata> = {
  en: {
    name: "DuctedExpert - Verified HVAC Expert Certification in 30s",
    description: "Learn in 30 seconds how our ducted air conditioning and heat pump specialists are rigorously vetted, verified, and certified.",
    duration: "PT34S",
    sectionTitle: "How our HVAC experts are certified in 30 seconds",
    badgeText: "30s Certification Overview",
  },
  de: {
    name: "DuctedExpert - Geprüfter HVAC-Experte in 30 Sekunden",
    description: "Erfahren Sie in 30 Sekunden, wie unsere Experten für Kanalklimaanlagen und Wärmepumpen streng geprüft und zertifiziert werden.",
    duration: "PT40S",
    sectionTitle: "Wie unsere HVAC-Experten in 30 Sekunden zertifiziert werden",
    badgeText: "30s Zertifizierungs-Überblick",
  },
  es: {
    name: "DuctedExpert - Certificación de experto en climatización en 30s",
    description: "Descubre en 30 segundos cómo nuestros especialistas en aire acondicionado por conductos son verificados y certificados.",
    duration: "PT36S",
    sectionTitle: "Cómo se certifican nuestros expertos HVAC en 30 segundos",
    badgeText: "Certificación en 30s",
  },
  it: {
    name: "DuctedExpert - Certificazione esperto HVAC in 30 secondi",
    description: "Scopri in 30 secondi come i nostri specialisti in climatizzazione canalizzata vengono accuratamente verificati e certificati.",
    duration: "PT36S",
    sectionTitle: "Come vengono certificati i nostri esperti HVAC in 30 secondi",
    badgeText: "Certificazione in 30s",
  },
  fi: {
    name: "DuctedExpert - Sertifioitu LVI-asiantuntija 30 sekunnissa",
    description: "Katso 30 sekunnissa, miten kanavailmastoinnin ja lämpöpumppujen asiantuntijamme tarkastetaan ja sertifioidaan.",
    duration: "PT40S",
    sectionTitle: "Miten LVI-asiantuntijamme sertifioidaan 30 sekunnissa",
    badgeText: "30s Sertifiointikatsaus",
  },
  ar: {
    name: "DuctedExpert - شهادة خبير التكييف المعتمد في 30 ثانية",
    description: "تعرف في 30 ثانية على كيفية فحص وتدقيق واعتماد مقاولي ومكاتb دراسات التكييف المركزي في شبكة DuctedExpert.",
    duration: "PT42S",
    sectionTitle: "كيف يتم فحص واعتماد خبراء التكييف في 30 ثانية",
    badgeText: "نظرة سريعة في 30 ثانية",
  },
};

const SOUND_LABELS: Record<Locale, { unmute: string; on: string }> = {
  en: { unmute: "Click for sound 🔊", on: "Sound ON" },
  de: { unmute: "Ton aktivieren 🔊", on: "Ton AN" },
  es: { unmute: "Activar sonido 🔊", on: "Sonido ACTIVADO" },
  it: { unmute: "Attiva audio 🔊", on: "Audio ATTIVO" },
  fi: { unmute: "Kytke ääni 🔊", on: "Ääni PÄÄLLÄ" },
  ar: { unmute: "تشغيل الصوت 🔊", on: "الصوت يعمل" },
};

export function ShortVerificationVideo({ className = "", forceLocale }: ShortVerificationVideoProps) {
  const { locale: contextLocale } = useLanguage();
  const activeLocale = forceLocale || contextLocale || 'en';
  const videoSrc = SHORT_VIDEO_BY_LOCALE[activeLocale] || SHORT_VIDEO_BY_LOCALE.en;
  const labels = SOUND_LABELS[activeLocale] || SOUND_LABELS.en;
  const meta = SHORT_METADATA[activeLocale] || SHORT_METADATA.en;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Schema.org VideoObject for Google Video SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": meta.name,
    "description": meta.description,
    "thumbnailUrl": [
      "https://www.ductedexpert.com/videos/ductedexpert-presentation-poster.jpg"
    ],
    "uploadDate": "2026-11-25T12:00:00+01:00",
    "duration": meta.duration,
    "contentUrl": `https://www.ductedexpert.com${videoSrc}`,
    "embedUrl": `https://www.ductedexpert.com${videoSrc}`,
    "inLanguage": activeLocale,
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSubscribed = true;
    video.load();

    const startPlaybackWithSound = () => {
      if (!isSubscribed) return;
      video.muted = false;
      video.volume = 1;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (isSubscribed) setIsMuted(false);
          })
          .catch(() => {
            if (isSubscribed) {
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            }
          });
      }
    };

    if (video.readyState >= 2) {
      startPlaybackWithSound();
    } else {
      video.addEventListener("canplay", startPlaybackWithSound, { once: true });
      video.addEventListener("loadeddata", startPlaybackWithSound, { once: true });
    }

    const unmuteOnUserGesture = () => {
      if (video) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
        setIsMuted(false);
      }
      removeListeners();
    };

    const removeListeners = () => {
      const events = ["click", "pointerdown", "touchstart", "touchend", "keydown", "wheel"];
      events.forEach((ev) => window.removeEventListener(ev, unmuteOnUserGesture, { capture: true }));
    };

    const events = ["click", "pointerdown", "touchstart", "touchend", "keydown", "wheel"];
    events.forEach((ev) => window.addEventListener(ev, unmuteOnUserGesture, { capture: true, once: true }));

    return () => {
      isSubscribed = false;
      removeListeners();
      video.removeEventListener("canplay", startPlaybackWithSound);
      video.removeEventListener("loadeddata", startPlaybackWithSound);
    };
  }, [videoSrc]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleContainerClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      setIsMuted(false);
    }
  };

  return (
    <section className="bg-slate-900 py-12 md:py-16 px-4 border-b border-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D59B2B]/20 border border-[#D59B2B]/40 text-[#D59B2B] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#D59B2B]" />
            {meta.badgeText}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-montserrat">
            {meta.sectionTitle}
          </h2>
        </div>

        <div 
          onClick={handleContainerClick}
          className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 group cursor-pointer ${className}`}
        >
          <video
            key={videoSrc}
            ref={videoRef}
            title={meta.name}
            className="w-full h-full object-contain mx-auto block"
            autoPlay
            loop
            playsInline
            controls
            preload="auto"
            poster="/videos/ductedexpert-presentation-poster.jpg"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Floating Sound Toggle Pill */}
          <button
            onClick={toggleSound}
            type="button"
            aria-label={isMuted ? labels.unmute : labels.on}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#1F2D3D]/90 hover:bg-[#1F2D3D] text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 border border-white/20 cursor-pointer"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#D59B2B] animate-pulse" />
                <span>{labels.unmute}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span>{labels.on}</span>
              </>
            )}
          </button>

          {/* Center Unmute Banner if Browser Blocked Sound on Cold Start */}
          {isMuted && (
            <div className="absolute inset-x-0 bottom-12 sm:bottom-16 z-20 flex justify-center pointer-events-none px-4">
              <div className="bg-[#1F2D3D]/95 text-white px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md border border-[#D59B2B]/40 flex items-center gap-3 animate-bounce">
                <Volume2 className="w-5 h-5 text-[#D59B2B]" />
                <span className="text-sm font-semibold">{labels.unmute}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
