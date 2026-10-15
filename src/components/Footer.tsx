import React from 'react';
import { Scissors, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#070A0F] border-t border-[#D4AF37]/20 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C378] to-[#D4AF37] p-0.5">
                <div className="w-full h-full bg-[#0E131F] rounded-full flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#E5C378]" />
                </div>
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-white">
                  Vasantha Family Salon
                </h3>
                <p className="font-telugu text-xs text-[#E5C378]">వసంత ఫ్యామిలీ సెలూన్</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Karimnagar's dedicated family destination for men's precision grooming, women's designer hair styling, deep scalp spas, and gentle child-safe haircuts.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Authentic Karimnagar Family Salon</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Signature Rituals
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Men's Precision Fades & Cuts</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Royal Beard Contouring & Steam</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Women's Designer Layers & Blowouts</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Argan & Keratin Deep Hair Spa</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Fruit & Herbal Glow Facials</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Gentle Kids Styling</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#E5C378] transition-colors">About Vasantha Salon</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Service Menu & Rituals</a></li>
              <li><a href="#gallery" className="hover:text-[#E5C378] transition-colors">Salon Photo Gallery</a></li>
              <li><a href="#experience" className="hover:text-[#E5C378] transition-colors">Hygiene Standards & Protocol</a></li>
              <li><a href="#reviews" className="hover:text-[#E5C378] transition-colors">Client Satisfaction Policy</a></li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#E5C378] text-[#E5C378] font-semibold transition-colors text-left cursor-pointer"
                >
                  Book Appointment Now →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Destination & Timings */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Karimnagar Destination
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Karimnagar, Telangana - 505001, India</span>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>9:30 AM – 9:00 PM Daily</span>
              </p>
              <p className="text-[11px] text-emerald-400/90 pt-1">
                Walk-ins welcomed daily. Appointments recommended for bridal & long hair spas.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline w-full py-2.5 rounded-xl text-center block text-xs font-semibold"
              >
                Open Google Maps Location
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <p>© {new Date().getFullYear()} Vasantha Family Salon, Karimnagar. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Dedicated to Karimnagar families with authentic care & artistry.
          </p>
        </div>
      </div>
    </footer>
  );
};
