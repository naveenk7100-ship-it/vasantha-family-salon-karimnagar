import React from 'react';
import { Scissors, ShieldCheck, Heart, Sparkles, Clock, Users } from 'lucide-react';
import { getImgUrl } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0D121D] border-t border-slate-800 overflow-hidden">
      {/* Decorative ambient illumination */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition with 2 completely distinct images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="gold-gradient-border shadow-2xl rounded-2xl overflow-hidden">
                <div className="gold-gradient-inner p-2 rounded-2xl">
                  <img
                    src={getImgUrl('about-salon-ambience.jpg')}
                    alt="Vasantha Family Salon Welcoming Lounge & Interior"
                    className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 sm:w-64 gold-gradient-border shadow-2xl rounded-2xl overflow-hidden">
                <div className="gold-gradient-inner p-1.5 rounded-2xl">
                  <img
                    src={getImgUrl('about-stylist-craft.jpg')}
                    alt="Professional Hair Styling & Shear Precision"
                    className="w-full h-36 sm:h-44 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -top-5 -left-4 sm:top-6 sm:-left-8 bg-[#0E131F]/95 border border-[#D4AF37]/40 shadow-xl shadow-black/80 p-3.5 rounded-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Karimnagar Destination</p>
                  <p className="text-[10px] text-[#E5C378]">Family Hair & Personal Care</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
                వసంత ఫ్యామిలీ సెలూన్ పరిచయం
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Crafted for Every Generation in <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Karimnagar</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong>Vasantha Family Salon</strong>, personal grooming is approached with care, patience, and family comfort. Established to offer Karimnagar residents modern salon artistry in a warm and welcoming space, we cater to men, women, teenagers, and young children alike.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              From contemporary textured fades and royal beard trims to layered women's blowouts and restorative scalp spas, our stylists listen carefully to your preferences before beginning.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Thorough Sanitization</p>
                  <p className="text-[11px] text-slate-400">Regular sterilization of combs & shears, with fresh single-use capes.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Dedicated Family Comfort</p>
                  <p className="text-[11px] text-slate-400">Private treatment rooms for skincare and cheerful chairs for kids.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Hair Vitality Focus</p>
                  <p className="text-[11px] text-slate-400">Low-ammonia color tones and nourishing argan oil scalp masques.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Convenient Timings</p>
                  <p className="text-[11px] text-slate-400">Open 9:30 AM – 9:00 PM Daily (Walk-ins & Appointments welcome).</p>
                </div>
              </div>
            </div>

            {/* Honest location disclaimer */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Karimnagar, Telangana. Listed on Google Maps • Dedicated to family care.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
