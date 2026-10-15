import React, { useState } from 'react';
import { Camera, ZoomIn, Sparkles, Scissors, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectPhoto: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Interior & Chairs' },
    { id: 'styling', label: 'Hair Styling & Color' },
    { id: 'spa', label: 'Spa & Facial Suites' },
    { id: 'grooming', label: "Men's Grooming" },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <Camera className="w-3.5 h-3.5" />
            <span>Salon Ambiance & Craftsmanship</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Visual Experience & <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Salon Gallery</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a visual walkthrough of the serene interiors, modern hydraulic styling stations, private skincare suites, and artisan hair treatments that await you in Karimnagar.
          </p>
        </div>

        {/* Category Tabs */}
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

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="salon-card overflow-hidden group cursor-pointer relative flex flex-col"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Action Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    View Photo
                  </span>
                </div>

                {/* Top Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#0E131F]/90 text-[#E5C378] border border-[#D4AF37]/30 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Caption Box */}
              <div className="p-4 bg-[#101624] flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#E5C378] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {item.teluguTitle && (
                    <p className="font-telugu text-xs font-semibold text-[#D4AF37] mt-0.5">
                      {item.teluguTitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Explore Ritual</span>
                  <span className="text-[#E5C378] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Photography Integrity Note */}
        <div className="mt-14 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <p>
            <strong className="text-slate-300">Photography Standard:</strong> All imagery shown represents the authentic styling standards, interior layout, and care practices available at Vasantha Family Salon, Karimnagar.
          </p>
        </div>

      </div>
    </section>
  );
};
