import React, { useState } from 'react';
import { SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';
import { Clock, Plus, Check, Sparkles, Scissors, Info, ArrowRight } from 'lucide-react';

interface ServiceCatalogProps {
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
  onOpenBooking: () => void;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
  selectedServiceIds,
  onToggleService,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'grooming', label: "Men's Grooming" },
    { id: 'hair', label: "Women's Styling" },
    { id: 'spa', label: 'Hair Spa & Repair' },
    { id: 'skin', label: 'Facials & De-Tan' },
    { id: 'kids', label: 'Kids Haircuts' },
    { id: 'bridal', label: 'Bridal & Occasion' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <Scissors className="w-3.5 h-3.5" />
            <span>Family Care Menu</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Curated Salon Services & <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Bespoke Rituals</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every service at Vasantha Family Salon is carried out with professional hygiene standards, sterilized equipment, and tailored consultation for individual hair and skin types.
          </p>

          {/* Transparent Pricing Disclaimer Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
            <Info className="w-4 h-4 text-[#E5C378] shrink-0" />
            <span>Transparent Consultation: Final service quotation is confirmed in-salon based on hair length, density, and customized styling needs.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'btn-gold shadow-md shadow-[#D4AF37]/20 scale-105'
                    : 'bg-[#121824] text-slate-300 hover:text-white border border-slate-800 hover:border-[#D4AF37]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredServices.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);

            return (
              <div
                key={service.id}
                className={`salon-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isSelected ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/40 bg-[#141C2B]' : ''
                }`}
              >
                <div>
                  {/* Category & Duration header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className="text-[11px] font-bold text-[#E5C378] uppercase tracking-wider">
                      {service.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      ~{service.durationMinutes} mins
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-3">
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#E5C378] transition-colors">
                      {service.name}
                    </h3>
                    {service.teluguName && (
                      <p className="text-xs font-medium text-[#D4AF37] mt-0.5">
                        {service.teluguName}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Includes:
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommendation pill */}
                  <div className="mt-4 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-200">Ideal For:</span> {service.recommendedFor}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-white font-semibold">Pricing:</span> In-Salon Consultation
                  </div>

                  <button
                    onClick={() => onToggleService(service.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-extrabold shadow-sm'
                        : 'bg-slate-800 hover:bg-[#D4AF37]/20 text-[#E5C378] border border-[#D4AF37]/30'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        Select Service
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Services Sticky / Summary Floating Box */}
        {selectedServiceIds.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl p-4 rounded-2xl bg-[#0E131F]/95 backdrop-blur-xl border border-[#D4AF37]/50 shadow-2xl shadow-black flex items-center justify-between gap-4 animate-fadeIn">
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E5C378]" />
                {selectedServiceIds.length} Service{selectedServiceIds.length > 1 ? 's' : ''} Selected
              </p>
              <p className="text-[11px] text-slate-400">
                Ready to reserve your time slot in Karimnagar
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
