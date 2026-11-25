"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { Locale } from "@/lib/i18n";

interface PresentationVideoProps {
  className?: string;
  forceLocale?: Locale;
}

const VIDEO_BY_LOCALE: Record<Locale, string> = {
  en: "/videos/ductedexpert-presentation-en.mp4",
  de: "/videos/ductedexpert-presentation-de.mp4",
  es: "/videos/ductedexpert-presentation-es.mp4",
  it: "/videos/ductedexpert-presentation-it.mp4",
  fi: "/videos/ductedexpert-presentation-fi.mp4",
  ar: "/videos/ductedexpert-presentation-ar.mp4",
};

export function PresentationVideo({ className = "", forceLocale }: PresentationVideoProps) {
  const { locale: contextLocale } = useLanguage();
  const activeLocale = forceLocale || contextLocale || 'en';
  const videoSrc = VIDEO_BY_LOCALE[activeLocale] || VIDEO_BY_LOCALE.en;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reload video when source changes
    video.load();

    // 1. Try to start WITH sound immediately
    video.muted = false;
    video.volume = 1;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }

    const unmuteOnUserGesture = () => {
      if (video) {
        video.muted = false;
        video.volume = 1;
        setIsMuted(false);
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("click", unmuteOnUserGesture);
      window.removeEventListener("touchstart", unmuteOnUserGesture);
      window.removeEventListener("keydown", unmuteOnUserGesture);
    };

    window.addEventListener("click", unmuteOnUserGesture, { once: true });
    window.addEventListener("touchstart", unmuteOnUserGesture, { once: true });
    window.addEventListener("keydown", unmuteOnUserGesture, { once: true });

    return () => {
      removeListeners();
    };
  }, [videoSrc]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 group ${className}`}>
      <video
        key={videoSrc}
        ref={videoRef}
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
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#1F2D3D]/90 hover:bg-[#1F2D3D] text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 border border-white/20 cursor-pointer"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-[#D59B2B] animate-pulse" />
            <span>Click for sound 🔊</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span>Sound ON</span>
          </>
        )}
      </button>
    </div>
  );
}
