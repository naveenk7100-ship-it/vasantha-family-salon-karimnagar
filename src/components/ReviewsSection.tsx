import React from 'react';
import { Star, ShieldCheck, HeartHandshake, MessageSquare, ExternalLink, Sparkles, MessageSquarePlus } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { ClientFeedback } from '../types';

interface ReviewsSectionProps {
  onOpenReviewModal: () => void;
  reviews: ClientFeedback[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenReviewModal,
  reviews
}) => {
  const standards = [
    {
      title: "Zero-Compromise Hygiene",
      desc: "Every scissor, trimmer blade, and comb undergoes multi-stage UV & autoclave sterilization between each guest."
    },
    {
      title: "Personalized Consultation",
      desc: "Stylists assess your hair growth patterns, scalp sensitivity, and lifestyle before cutting or coloring."
    },
    {
      title: "Family Care & Comfort",
      desc: "Separate zones for women's privacy, men's precision grooming, and child-safe chairs for toddlers."
    },
    {
      title: "Transparent & Honest",
      desc: "Clear consultation with no surprise charges or aggressive retail product pushing."
    }
  ];

  return (
    <section id="reviews" className="py-24 relative bg-[#0D121D] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Client Care & Satisfaction</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Quality Standards & <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Community Trust</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In strict adherence to authentic business ethics, we never generate fake online ratings or fabricate artificial testimonials. Our reputation in Karimnagar is earned client by client through consistent craft.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {standards.map((s, idx) => (
            <div key={idx} className="salon-card p-6 space-y-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Feedback or Submission CTA */}
        <div className="mt-14 max-w-4xl mx-auto p-8 rounded-2xl bg-[#121824] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <Star className="w-5 h-5 text-[#E5C378] fill-[#E5C378]" />
              Experience Vasantha Family Salon & Share Your Voice
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Visited us in Karimnagar? Whether you received a stylish haircut, facial glow, or beard sculpt, your honest feedback helps us maintain excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Google Maps Listing
            </a>

            <button
              onClick={onOpenReviewModal}
              className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              Write Client Feedback
            </button>
          </div>
        </div>

        {/* Submitted Feedback List */}
        {reviews.length > 0 && (
          <div className="mt-10 space-y-4">
            <h4 className="text-xs font-bold text-[#E5C378] uppercase tracking-wider text-left">
              Recent Visitor Notes ({reviews.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="salon-card p-5 space-y-2.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{r.name}</span>
                    <div className="flex text-[#E5C378]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < r.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">{r.service}</p>
                  <p className="text-xs text-slate-300 italic">“{r.comment}”</p>
                  <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                    Logged on {r.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
