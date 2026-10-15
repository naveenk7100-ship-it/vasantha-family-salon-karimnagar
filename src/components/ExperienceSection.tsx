import React from 'react';
import { Sparkles, Users, ShieldCheck, Heart, Award, Smile, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: "Truly Family-Centric Atmosphere",
      telugu: "కుటుంబమంతా కలిసి సేవలు పొందే వాతావరణం",
      desc: "Thoughtfully zoned spaces ensuring privacy for women, focused sharp grooming for men, and an encouraging, cheerful environment for children."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Hygiene Protocol",
      telugu: "పూర్తి శానిటైజేషన్ & పరిశుభ్రత",
      desc: "Every scissor, trimmer blade, and comb undergoes autoclave/UV sterilization between every client. Disposable neck strips and single-use capes are standard."
    },
    {
      icon: Award,
      title: "Experienced Master Stylists",
      telugu: "అనుభవజ్ఞులైన నిపుణుల సేవలు",
      desc: "Our hair artists undergo regular masterclasses in modern fades, hair texture management, balayage color harmony, and botanical facial therapies."
    },
    {
      icon: Heart,
      title: "Scalp & Skin Health First",
      telugu: "రసాయన రహిత & సురక్షిత సంరక్షణ",
      desc: "We prioritize hair vitality above all. We choose low-ammonia colors, organic argan infusions, and dermatologically tested skincare products."
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#0A0D14] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Vasantha Difference</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Karimnagar Families Choose <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Vasantha Salon</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Personal grooming is not just a quick haircut; it's a confidence ritual. We bring premium urban salon standards to Karimnagar with genuine care and warmth.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="salon-card p-6 flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E5C378]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E5C378]" />
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                      {pillar.telugu}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-[#E5C378]">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Standard at Vasantha
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Banner */}
        <div className="mt-16 gold-gradient-border max-w-4xl mx-auto">
          <div className="gold-gradient-inner p-8 text-center space-y-3">
            <p className="font-serif-luxury text-2xl sm:text-3xl font-medium italic text-[#F3E5AB]">
              “When your family looks their best, they feel ready to conquer the world.”
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Vasantha Family Salon • Karimnagar, Telangana
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
