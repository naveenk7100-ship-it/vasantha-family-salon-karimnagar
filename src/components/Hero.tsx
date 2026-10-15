import React from 'react';
import { Calendar, MapPin, Camera, Sparkles, Scissors, Users, HeartHandshake, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenPhotoKit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenPhotoKit }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden salon-lux-bg">
      {/* Decorative ambient gold orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#E5C378]/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161D2B] border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378] shadow-inner shadow-black/60">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Karimnagar Destination</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                Telangana, India
              </span>
            </div>

            {/* Telugu Sub-title */}
            <p className="text-sm md:text-base font-semibold text-[#D4AF37] tracking-wider uppercase">
              వసంత ఫ్యామిలీ సెలూన్ • కరీంనగర్
            </p>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Elevating Personal Style & <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Family Beauty Rituals</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience warm hospitality and precision craftsmanship in Karimnagar. From bespoke men’s beard contouring and designer women's haircuts to soothing organic hair spas and child-friendly styling — all in a pristine, hygienic salon ambiance.
            </p>

            {/* Verified Details Note */}
            <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3 text-left max-w-xl mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Google Maps Verified Listing:</span>{' '}
                <span>Listed for Karimnagar. Verified details only — transparent consultations and genuine client care.</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-gold px-6 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-[#D4AF37]/25"
              >
                <Calendar className="w-4 h-4" />
                Book Your Appointment
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline px-5 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Directions on Map
              </a>

              <button
                onClick={onOpenPhotoKit}
                className="px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-[#D4AF37]/40 transition-colors flex items-center gap-2"
                title="View image submission guidelines for salon owner"
              >
                <Camera className="w-4 h-4 text-[#D4AF37]" />
                Photo Submission Kit
              </button>
            </div>

            {/* Feature Highlights Pills */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Entire Family</p>
                  <p className="text-[10px] text-slate-400">Men, Women & Kids</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Scissors className="w-4 h-4 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Custom Styling</p>
                  <p className="text-[10px] text-slate-400">Precision Cuts & Spa</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Pure Hygiene</p>
                  <p className="text-[10px] text-slate-400">Sterilized Tools</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Luxury Display Card */}
          <div className="lg:col-span-5 relative">
            <div className="gold-gradient-border shadow-2xl shadow-black/80">
              <div className="gold-gradient-inner p-6 sm:p-8 space-y-6">
                
                {/* Visual Emblem Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#D4AF37]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E5C378] to-[#D4AF37] p-0.5 shadow-md">
                      <div className="w-full h-full bg-[#0E131F] rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-[#E5C378]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-serif-luxury text-xl font-bold text-white">
                        Vasantha Family Salon
                      </h2>
                      <p className="text-xs text-[#E5C378] font-medium">Karimnagar Center of Excellence</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#E5C378] border border-[#D4AF37]/30">
                    Est. Karimnagar
                  </span>
                </div>

                {/* Aesthetic Visual Composition Box */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141B2B] to-[#0A0D14] border border-[#D4AF37]/25 p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shadow-lg shadow-[#D4AF37]/10">
                    <Scissors className="w-8 h-8 text-[#E5C378]" />
                  </div>

                  <div className="space-y-1">
                    <p className="font-serif-luxury text-2xl font-bold text-white">
                      The Family Salon Experience
                    </p>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      A dedicated space where every generation receives personalized hair care, skin therapy, and grooming.
                    </p>
                  </div>

                  {/* 3 Experience Badges */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2 text-left">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        Men & Boys Lounge
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Classic cuts, fades & beard sculpt</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]" />
                        Women & Girls Studio
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Styling, deep spa, facials & glow</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-left flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-[11px] font-bold text-emerald-300">Appointment Hours</p>
                        <p className="text-[10px] text-slate-400">9:30 AM – 9:00 PM Daily</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      Walk-ins Welcome
                    </span>
                  </div>
                </div>

                {/* Photo Guide Callout banner inside card */}
                <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Camera className="w-4 h-4 text-[#E5C378]" />
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">Owner Photo Kit</p>
                      <p className="text-[10px] text-slate-300">Submit 6 real salon photos</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenPhotoKit}
                    className="text-xs font-bold text-[#E5C378] hover:text-white underline cursor-pointer"
                  >
                    View Guidelines
                  </button>
                </div>

              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-2xl bg-[#0E131F]/95 border border-[#D4AF37]/40 shadow-xl shadow-black/80 items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#E5C378]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Karimnagar City</p>
                <p className="text-[10px] text-slate-400">Easy road access & parking</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
