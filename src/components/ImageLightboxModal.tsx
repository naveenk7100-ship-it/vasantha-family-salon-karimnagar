import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0E131F] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#E5C378] uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-300 font-medium">Vasantha Family Salon</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[65vh] object-contain"
          />

          {/* Nav arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-slate-950 transition-colors backdrop-blur-md cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-slate-950 transition-colors backdrop-blur-md cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Description */}
        <div className="p-5 bg-[#0E131F] space-y-1.5 text-left">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              {item.title}
            </h3>
            {item.teluguTitle && (
              <span className="text-xs text-[#E5C378] font-medium">
                {item.teluguTitle}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
