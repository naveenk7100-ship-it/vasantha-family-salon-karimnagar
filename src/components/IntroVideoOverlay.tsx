import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, FastForward, Play, AlertCircle, Sparkles, MapPin, Scissors } from 'lucide-react';

interface IntroVideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroVideoOverlay: React.FC<IntroVideoOverlayProps> = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const videoSrc = `${import.meta.env.BASE_URL}videos/salon-intro.mp4`;
  const posterSrc = `${import.meta.env.BASE_URL}videos/salon-intro-poster.jpg`;

  // Handle smooth closing transition
  const handleDismiss = () => {
    setIsFadingOut(true);
    try {
      sessionStorage.setItem('vasantha_intro_seen', 'true');
    } catch {
      // Storage unavailable in incognito mode
    }
    setTimeout(() => {
      onClose();
      setIsFadingOut(false);
    }, 600);
  };

  // Keyboard accessibility (Escape key to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Autoplay attempt & fallback timer on mount
  useEffect(() => {
    if (!isOpen) {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
      return;
    }

    // Set fallback timeout: if video fails to play within 4 seconds, show graceful entrance
    fallbackTimerRef.current = window.setTimeout(() => {
      if (!isPlaying) {
        setHasError(true);
      }
    }, 4000);

    // Attempt autoplay if element exists
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
          })
          .catch((err) => {
            console.warn('Intro video autoplay restricted by browser:', err);
            // Autoplay failed (e.g. mobile battery saver); keep poster ready and allow user click
          });
      }
    }

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [isOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleVideoEnded = () => {
    // No repeated playback loop: smoothly exit when finished
    handleDismiss();
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasError(false);
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#070A0F] flex flex-col items-center justify-between transition-all duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Vasantha Family Salon Video Tour"
    >
      {/* Ambient background glow matching salon lighting */}
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/10 via-[#0A0D14]/80 to-[#070A0F] pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-5xl px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between border-b border-slate-800/60 bg-[#070A0F]/80 backdrop-blur-md">
        
        {/* Salon Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C378] via-[#D4AF37] to-[#B89228] p-0.5 shadow-lg shadow-[#D4AF37]/20">
            <div className="w-full h-full bg-[#0E131F] rounded-full flex items-center justify-center">
              <Scissors className="w-4 h-4 text-[#E5C378] -rotate-45" />
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h2 className="font-serif-luxury text-base sm:text-lg font-bold text-white tracking-wide">
                Vasantha Family Salon
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#D4AF37]/20 text-[#E5C378] border border-[#D4AF37]/30 uppercase">
                Tour
              </span>
            </div>
            <p className="font-telugu text-xs text-[#D4AF37] font-semibold flex items-center gap-1.5">
              <span>వసంత ఫ్యామిలీ సెలూన్</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-sans font-normal text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                Karimnagar, Telangana
              </span>
            </p>
          </div>
        </div>

        {/* Action Controls: Audio Toggle & Skip Intro */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Turn Sound On' : 'Mute Sound'}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-[#D4AF37]/50 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="hidden sm:inline text-emerald-300">Sound On</span>
              </>
            )}
          </button>

          {/* Prominent Skip Intro Button */}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Skip video intro and enter salon homepage"
            className="btn-gold px-4 sm:px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition-transform"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Video Presentation Stage */}
      <main className="relative z-10 flex-1 w-full max-w-5xl flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        <div className="relative w-full max-w-[420px] max-h-[82vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-black border-2 border-[#D4AF37]/30 bg-black flex items-center justify-center group">
          
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            muted={isMuted}
            autoPlay
            loop={false}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onPlay={() => {
              setIsPlaying(true);
              setHasError(false);
            }}
            onError={() => {
              console.warn('Video failed to load, presenting fallback image.');
              setHasError(true);
            }}
            className="w-full h-full object-cover"
          />

          {/* Subtle vignette over video */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Fallback / Paused Manual Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5C378] to-[#D4AF37] flex items-center justify-center text-slate-950 shadow-xl shadow-[#D4AF37]/30">
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Karimnagar Salon Tour
                </h3>
                <p className="text-xs text-slate-300 max-w-xs">
                  Step inside our styling studio, reclined wash lounge, and family beauty suites.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <button
                  type="button"
                  onClick={handleManualPlay}
                  className="btn-gold py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Play Salon Tour
                </button>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="btn-gold-outline py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Skip Directly to Homepage
                </button>
              </div>
            </div>
          )}

          {/* Bottom Video Badge & Watermark */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left pointer-events-none">
            <div className="bg-[#0A0D14]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37]/30">
              <p className="text-[10px] uppercase tracking-wider text-[#E5C378] font-bold">
                Walkthrough
              </p>
              <p className="text-xs font-serif-luxury font-bold text-white">
                Vasantha Family Salon
              </p>
            </div>
            <span className="text-[10px] text-slate-400 bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
              Press Esc to skip
            </span>
          </div>

        </div>
      </main>

      {/* Bottom Progress Bar & Quick Entrance */}
      <footer className="relative z-10 w-full max-w-5xl px-4 sm:px-6 py-3 border-t border-slate-800/60 bg-[#070A0F]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        {/* Progress Bar Container */}
        <div className="w-full sm:w-1/2 flex items-center gap-3">
          <span className="text-[11px] text-slate-500 font-mono">00:00</span>
          <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#E5C378] to-[#D4AF37] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] text-[#E5C378] font-mono">00:20</span>
        </div>

        {/* Enter Salon Directly Link */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[11px] text-slate-400">
            Impeccable styling & family comfort in Karimnagar
          </span>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-[#E5C378] hover:text-white font-bold text-xs underline underline-offset-4 cursor-pointer"
          >
            Enter Salon Homepage →
          </button>
        </div>
      </footer>
    </div>
  );
};
