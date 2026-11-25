"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
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

const SOUND_LABELS: Record<Locale, { unmute: string; on: string }> = {
  en: { unmute: "Click for sound 🔊", on: "Sound ON" },
  de: { unmute: "Ton aktivieren 🔊", on: "Ton AN" },
  es: { unmute: "Activar sonido 🔊", on: "Sonido ACTIVADO" },
  it: { unmute: "Attiva audio 🔊", on: "Audio ATTIVO" },
  fi: { unmute: "Kytke ääni 🔊", on: "Ääni PÄÄLLÄ" },
  ar: { unmute: "تشغيل الصوت 🔊", on: "الصوت يعمل" },
};

export function PresentationVideo({ className = "", forceLocale }: PresentationVideoProps) {
  const { locale: contextLocale } = useLanguage();
  const activeLocale = forceLocale || contextLocale || 'en';
  const videoSrc = VIDEO_BY_LOCALE[activeLocale] || VIDEO_BY_LOCALE.en;
  const labels = SOUND_LABELS[activeLocale] || SOUND_LABELS.en;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSubscribed = true;

    // Reload video when source changes
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
            // Browser autoplay policy rejected unmuted audio on cold start
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

    // Unmute on ANY subsequent user interaction across window
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
    <div 
      onClick={handleContainerClick}
      className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 group cursor-pointer ${className}`}
    >
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
        <div className="absolute inset-x-0 bottom-16 sm:bottom-20 z-20 flex justify-center pointer-events-none px-4">
          <div className="bg-[#1F2D3D]/95 text-white px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md border border-[#D59B2B]/40 flex items-center gap-3 animate-bounce">
            <Volume2 className="w-5 h-5 text-[#D59B2B]" />
            <span className="text-sm font-semibold">{labels.unmute}</span>
          </div>
        </div>
      )}
    </div>
  );
}
