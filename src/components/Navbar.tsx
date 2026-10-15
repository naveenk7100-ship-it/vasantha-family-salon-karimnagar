import React, { useState, useEffect } from 'react';
import { Scissors, MapPin, Calendar, Camera, Menu, X, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPhotoKit: () => void;
  onOpenOwnerPhoneModal: () => void;
  verifiedPhone?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPhotoKit,
  onOpenOwnerPhoneModal,
  verifiedPhone
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E5C378] via-[#D4AF37] to-[#B89228] p-0.5 shadow-lg shadow-[#D4AF37]/20 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0E131F] rounded-full flex items-center justify-center">
                <Scissors className="w-5 h-5 text-[#E5C378] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#E5C378] transition-colors">
                  Vasantha
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C378] border border-[#D4AF37]/30 tracking-wider uppercase">
                  Family Salon
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                Karimnagar, Telangana
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-[#E5C378] transition-colors"
            >
              Services
            </a>
            <a
              href="#photo-kit"
              className="text-sm font-medium text-slate-300 hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
              Photo Kit
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-slate-300 hover:text-[#E5C378] transition-colors"
            >
              Why Vasantha
            </a>
            <a
              href="#verification"
              className="text-sm font-medium text-slate-300 hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Details
            </a>
            <a
              href="#location"
              className="text-sm font-medium text-slate-300 hover:text-[#E5C378] transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Directions
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {verifiedPhone ? (
              <a
                href={`tel:${verifiedPhone}`}
                className="btn-gold-outline px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Salon
              </a>
            ) : (
              <button
                onClick={onOpenOwnerPhoneModal}
                className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-[#D4AF37]/50 text-slate-300 hover:text-[#E5C378] transition-colors flex items-center gap-1"
                title="Salon manager can link verified phone"
              >
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                Owner Connect
              </button>
            )}

            <a
              href={BUSINESS_INFO.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Maps
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-gold px-4 py-2 rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-gold px-3 py-1.5 rounded-lg text-[11px] font-bold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-[#E5C378] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D121D]/98 border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#E5C378] font-medium text-sm"
            >
              Service Menu
            </a>
            <a
              href="#photo-kit"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoKit();
              }}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#E5C378] font-medium text-sm flex items-center justify-between"
            >
              <span>Salon Photo Kit & Media</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C378]">Owner Guide</span>
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#E5C378] font-medium text-sm"
            >
              Why Choose Us
            </a>
            <a
              href="#verification"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#E5C378] font-medium text-sm flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Business Data
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#E5C378] font-medium text-sm"
            >
              Location & Map Directions
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full btn-gold py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Salon Appointment
            </button>
            <a
              href={BUSINESS_INFO.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold-outline py-2.5 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Navigate on Google Maps
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
