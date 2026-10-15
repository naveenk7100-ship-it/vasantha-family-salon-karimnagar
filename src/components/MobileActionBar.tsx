import React from 'react';
import { Calendar, MapPin, Scissors, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E131F]/95 backdrop-blur-lg border-t border-[#D4AF37]/25 px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={BUSINESS_INFO.googleMapsSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
        Map
      </a>

      <a
        href="#gallery"
        className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <ImageIcon className="w-3.5 h-3.5 text-[#E5C378]" />
        Photos
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-[1.5] btn-gold py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#D4AF37]/30 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        Book Visit
      </button>
    </div>
  );
};
