import React from 'react';
import { Calendar, MapPin, Sparkles, Scissors, Users, HeartHandshake, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO, getImgUrl } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden salon-lux-bg">
      {/* Decorative ambient illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#D4AF37]/12 via-[#E5C378]/6 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161D2B] border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378] shadow-inner shadow-black/60">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Karimnagar Family Salon</span>
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
              Step into Karimnagar's welcoming salon destination where every generation receives personalized hair artistry, restorative scalp spas, beard sculpting, and rejuvenating skin care in an impeccably clean environment.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-[#D4AF37]/25"
              >
                <Calendar className="w-4 h-4" />
                Book Your Appointment
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="btn-gold-outline px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                Explore Services
              </a>

              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-[#D4AF37]/40 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                Google Maps
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Full Family</p>
                  <p className="text-[10px] text-slate-400">Men, Women & Kids</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Scissors className="w-4 h-4 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Hair Artistry</p>
                  <p className="text-[10px] text-slate-400">Custom Cuts & Spa</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Cleanliness</p>
                  <p className="text-[10px] text-slate-400">Sanitized Stations</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Real Visual Showcase with unique hero image */}
          <div className="lg:col-span-5 relative">
            <div className="gold-gradient-border shadow-2xl shadow-black/90">
              <div className="gold-gradient-inner p-3 rounded-2xl relative overflow-hidden group">
                
                {/* Main Hero Salon Image */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={getImgUrl('hero-salon-main.jpg')}
                    alt="Vasantha Family Salon Ambiance and Styling Stations in Karimnagar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Elegant Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0E131F]/90 text-[#E5C378] border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Family Salon & Spa
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      Open 9:30 AM – 9 PM
                    </span>
                  </div>

                  {/* Bottom Content Card on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0E131F]/90 border border-[#D4AF37]/25 backdrop-blur-md space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif-luxury text-lg font-bold text-white">
                        Vasantha Family Salon
                      </h3>
                      <span className="text-[10px] text-[#E5C378] font-bold tracking-wider uppercase">
                        Karimnagar
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Custom haircuts, royal beard grooming, argan hair spas, and herbal glow facials.
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-[10px] text-slate-400">
                      <span>Walk-ins & Reservations</span>
                      <button
                        onClick={onOpenBooking}
                        className="text-[#E5C378] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Reserve Slot →
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Location Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-3.5 rounded-2xl bg-[#0E131F]/95 border border-[#D4AF37]/40 shadow-xl shadow-black/80 items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#E5C378]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Karimnagar, Telangana</p>
                <p className="text-[10px] text-slate-400">Street access & family comfort</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
