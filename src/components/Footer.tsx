import React from 'react';
import { Scissors, MapPin, Phone, ShieldCheck, Heart, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPhotoKit: () => void;
  onOpenOwnerPhoneModal: () => void;
  verifiedPhone?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPhotoKit,
  onOpenOwnerPhoneModal,
  verifiedPhone
}) => {
  return (
    <footer className="bg-[#070A0F] border-t border-[#D4AF37]/20 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
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
                <p className="text-[11px] text-[#E5C378]">వసంత ఫ్యామిలీ సెలూన్</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Karimnagar's dedicated destination for men's grooming, women's designer hair styling, restorative hair spas, and child-safe cuts.
            </p>

            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-medium">Audited & Verified Listing</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Signature Rituals
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Men's Precision Cuts & Fades</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Royal Beard Contouring & Steam</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Women's Designer Layers & Blowouts</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Argan & Keratin Deep Hair Spa</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Brightening Fruit & Herbal Facials</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Gentle Kids Grooming</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#E5C378] transition-colors text-left cursor-pointer">
                  Book Salon Appointment
                </button>
              </li>
              <li>
                <button onClick={onOpenPhotoKit} className="hover:text-[#E5C378] transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Salon Photo Submission Kit
                </button>
              </li>
              <li>
                <a href="#verification" className="hover:text-[#E5C378] transition-colors">
                  Business Data Transparency Audit
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#E5C378] transition-colors">
                  Hygiene & Sanitation Policy
                </a>
              </li>
              <li>
                <button onClick={onOpenOwnerPhoneModal} className="hover:text-[#E5C378] transition-colors text-left cursor-pointer text-[#E5C378]">
                  Owner / Manager Phone Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Destination & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Karimnagar Destination
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Karimnagar, Telangana - 505001, India</span>
              </p>
              <p className="text-slate-400">
                Hours: 9:30 AM – 9:00 PM Daily
              </p>
              {verifiedPhone ? (
                <p className="flex items-center gap-2 pt-1 text-emerald-400 font-semibold">
                  <Phone className="w-3.5 h-3.5" />
                  {verifiedPhone}
                </p>
              ) : (
                <p className="text-[11px] text-amber-300/80 pt-1">
                  Direct phone verification pending owner link.
                </p>
              )}
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline w-full py-2 rounded-xl text-center block text-xs font-semibold"
              >
                Open Google Maps Listing
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <p>© {new Date().getFullYear()} Vasantha Family Salon, Karimnagar. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Designed for Karimnagar Families with genuine care & precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
