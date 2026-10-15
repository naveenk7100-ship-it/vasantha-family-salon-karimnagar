import React, { useState } from 'react';
import { Camera, CheckCircle2, AlertCircle, Upload, Eye, Copy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { PHOTO_REQUIREMENTS } from '../data/salonData';
import { PhotoRequirement } from '../types';

interface PhotoKitSectionProps {
  customPhotos: Record<string, string>;
  onPhotoUpload: (id: string, url: string) => void;
}

export const PhotoKitSection: React.FC<PhotoKitSectionProps> = ({ customPhotos, onPhotoUpload }) => {
  const [copied, setCopied] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRequirement | null>(null);

  const handleCopyChecklist = () => {
    const text = PHOTO_REQUIREMENTS.map((p, idx) => 
      `${idx + 1}. ${p.title}\n   - Target: ${p.aspectRatio} | ${p.resolution}\n   - Purpose: ${p.whyNeeded}\n   - Key Tips: ${p.tips.join('; ')}`
    ).join('\n\n');

    navigator.clipboard.writeText(`📸 VASANTHA FAMILY SALON, KARIMNAGAR - PHOTOGRAPHER SHOT LIST:\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onPhotoUpload(id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="photo-kit" className="py-20 relative bg-[#0D121D] border-y border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Imagery Standard</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Salon Photo Kit & <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Image Submission Guide</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In accordance with high verification standards, we do not use fake or unrelated stock images pretending to be Vasantha Family Salon. Here is the official 6-shot photography checklist for the salon owner to capture and upload.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyChecklist}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-all cursor-pointer shadow"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#E5C378]" />}
              {copied ? 'Checklist Copied to Clipboard!' : 'Copy Photographer Shot List'}
            </button>
            <span className="text-xs text-slate-400">
              {Object.keys(customPhotos).length} of {PHOTO_REQUIREMENTS.length} photos uploaded locally
            </span>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {PHOTO_REQUIREMENTS.map((item) => {
            const hasCustom = Boolean(customPhotos[item.id]);

            return (
              <div
                key={item.id}
                className="salon-card p-6 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Header of card */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#E5C378] uppercase tracking-wider block">
                        Requirement
                      </span>
                      <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    {hasCustom ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Uploaded
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Pending Real Shot
                      </span>
                    )}
                  </div>

                  {/* Photo Preview or Placeholder */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                    {hasCustom ? (
                      <img
                        src={customPhotos[item.id]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="p-4 text-center space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                          <ImageIcon className="w-6 h-6 text-[#D4AF37]/60" />
                        </div>
                        <p className="text-xs font-semibold text-slate-300">{item.sampleDescription}</p>
                        <p className="text-[10px] text-slate-500">{item.aspectRatio} • {item.resolution}</p>
                      </div>
                    )}

                    {/* Overlay Upload Trigger */}
                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 cursor-pointer text-white">
                      <Upload className="w-5 h-5 text-[#E5C378]" />
                      <span className="text-xs font-bold text-[#E5C378]">
                        {hasCustom ? 'Replace Image' : 'Select Photo to Preview'}
                      </span>
                      <span className="text-[10px] text-slate-300">Click to upload from device</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(item.id, e)}
                      />
                    </label>
                  </div>

                  {/* Specs & Why Needed */}
                  <div className="space-y-2.5 text-xs text-slate-300 pt-1">
                    <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Aspect Ratio:</span>
                      <span className="font-semibold text-white">{item.aspectRatio}</span>
                    </div>

                    <p className="text-slate-300">
                      <strong className="text-white">Why Needed:</strong> {item.whyNeeded}
                    </p>

                    <div>
                      <strong className="text-white block mb-1">Photography Tips:</strong>
                      <ul className="space-y-1 text-slate-400">
                        {item.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#D4AF37]">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <label className="text-xs font-bold text-[#E5C378] hover:text-white flex items-center gap-1.5 cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{hasCustom ? 'Change Photo' : 'Upload Real Photo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(item.id, e)}
                    />
                  </label>

                  {hasCustom && (
                    <button
                      onClick={() => onPhotoUpload(item.id, '')}
                      className="text-[11px] text-rose-400 hover:text-rose-300 underline cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141B2B] via-[#101624] to-[#141B2B] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-[#E5C378]" />
              Need Help With Professional Photography in Karimnagar?
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Photographs taken with modern smartphone cameras under bright daylight and clean salon mirrors work great! Share the 6-point checklist with your photographer or salon team.
            </p>
          </div>
          <button
            onClick={handleCopyChecklist}
            className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer"
          >
            Copy WhatsApp Checklist
          </button>
        </div>

      </div>
    </section>
  );
};
