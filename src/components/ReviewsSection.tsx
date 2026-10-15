import React, { useState } from 'react';
import { Star, MessageSquarePlus, ShieldCheck, User, Calendar, CheckCircle2 } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

interface ReviewsSectionProps {
  onOpenReviewModal: () => void;
  reviews: ReviewItem[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenReviewModal,
  reviews
}) => {
  return (
    <section id="reviews" className="py-20 relative bg-[#0D121D] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity First</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Client Feedback & <span className="text-[#E5C378]">Community Voice</span>
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            In compliance with verified guidelines, we never fabricate fake online ratings or invent promotional testimonials. Real feedback from Karimnagar clients will appear here.
          </p>
        </div>

        {/* Content Box */}
        {reviews.length === 0 ? (
          <div className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-[#121824] border border-dashed border-[#D4AF37]/30 text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Star className="w-7 h-7 text-[#E5C378]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Be the First to Review Vasantha Family Salon!
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Have you received a haircut, hair spa, or beard grooming session with us in Karimnagar? Share your honest thoughts with the community.
              </p>
            </div>

            <button
              onClick={onOpenReviewModal}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Write First Client Review
            </button>
          </div>
        ) : (
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white">
                {reviews.length} Client Review{reviews.length > 1 ? 's' : ''} Submitted
              </p>
              <button
                onClick={onOpenReviewModal}
                className="btn-gold-outline px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                Add Your Review
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="salon-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{r.name}</p>
                        <p className="text-[10px] text-slate-400">{r.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#E5C378]">
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

                  <p className="text-xs text-slate-300 italic">“{r.comment}”</p>
                  <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                    Visited {r.date} • Verified Client Feedback
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
