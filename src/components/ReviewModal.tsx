import React, { useState, useEffect } from 'react';
import { X, Star, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: { name: string; rating: number; service: string; comment: string }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview
}) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('Haircut & Styling');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    confetti({
      particleCount: 60,
      spread: 60,
      colors: ['#D4AF37', '#E5C378', '#FFFFFF']
    });

    onSubmitReview({
      name: name.trim(),
      rating,
      service,
      comment: comment.trim()
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md bg-[#0E131F] border border-[#D4AF37]/35 rounded-2xl shadow-2xl p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              Write Salon Review
            </h3>
            <p className="text-xs text-slate-400">Share your genuine experience at Vasantha Salon</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ananya Rao"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Star Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 cursor-pointer focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 transition-colors ${
                      star <= rating
                        ? 'fill-[#D4AF37] text-[#D4AF37]'
                        : 'text-slate-700 hover:text-slate-500'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs text-slate-400 ml-2">{rating} of 5 Stars</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Service Received
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="Haircut & Styling">Haircut & Styling</option>
              <option value="Beard Grooming">Beard Grooming & Shape</option>
              <option value="Hair Spa & Repair">Hair Spa Treatment</option>
              <option value="Facial & Skin Radiance">Facial & Skin Radiance</option>
              <option value="Kids Haircut">Kids Haircut</option>
              <option value="Hair Color / Highlights">Hair Color / Highlights</option>
              <option value="Bridal / Family Package">Bridal / Event Styling</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Honest Feedback *
            </label>
            <textarea
              required
              rows={3}
              placeholder="How was the haircut, hygiene, stylist attention, and salon comfort?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37] resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-gold py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Publish Genuine Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
