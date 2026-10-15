import React from 'react';
import { Scissors, ShieldCheck, Heart, Sparkles, CheckCircle2, Clock, Users } from 'lucide-react';
import { getImgUrl } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0D121D] border-t border-slate-800 overflow-hidden">
      {/* Decorative ambient illumination */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="gold-gradient-border shadow-2xl rounded-2xl overflow-hidden">
                <div className="gold-gradient-inner p-2 rounded-2xl">
                  <img
                    src={getImgUrl('styling-chairs.jpg')}
                    alt="Vasantha Family Salon Interior Styling Chairs"
                    className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 sm:w-64 gold-gradient-border shadow-2xl rounded-2xl overflow-hidden">
                <div className="gold-gradient-inner p-1.5 rounded-2xl">
                  <img
                    src={getImgUrl('salon-tools.jpg')}
                    alt="Precision Sterilized Salon Equipment"
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
                  <p className="text-xs font-bold text-white">Karimnagar Center</p>
                  <p className="text-[10px] text-[#E5C378]">Family Hair & Beauty Care</p>
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
              At <strong>Vasantha Family Salon</strong>, we believe personal grooming is a cornerstone of family confidence and well-being. Built to serve Karimnagar with urban salon sophistication, our doors welcome men, women, teenagers, and young kids into a calm, welcoming, and impeccably clean environment.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether you are preparing for a milestone wedding ceremony, refreshing your signature haircut, or treating your scalp to an aromatic deep conditioning hair spa, our stylists take the time to consult, assess your hair texture, and recommend the best rituals without rushed cuts.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Autoclave Sterilization</p>
                  <p className="text-[11px] text-slate-400">All shears & combs sanitized between every guest.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Dedicated Family Zones</p>
                  <p className="text-[11px] text-slate-400">Private facial suites and child-safe chairs.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Scalp & Hair Health</p>
                  <p className="text-[11px] text-slate-400">Ammonia-conscious colors & nourishing argan oils.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Daily Convenience</p>
                  <p className="text-[11px] text-slate-400">Open 9:30 AM – 9:00 PM with walk-ins welcome.</p>
                </div>
              </div>
            </div>

            {/* Location reassurance */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Proudly rooted in Karimnagar, Telangana • Dedicated to your family's style.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
