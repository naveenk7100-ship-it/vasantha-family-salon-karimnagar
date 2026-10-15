import React from 'react';
import { MapPin, Navigation, Clock, Car, Compass, ExternalLink, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 relative bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Salon Directions</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Visit Us in <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Karimnagar, Telangana</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Karimnagar, catering to families with accessible street parking and clean, comfortable salon facilities.
          </p>
        </div>

        {/* Location Card & Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-center">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="salon-card p-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#E5C378] uppercase tracking-wider">
                  Confirmed Destination
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Vasantha Family Salon
                </h3>
                <p className="text-sm text-slate-300 flex items-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Karimnagar, Telangana - 505001, India</span>
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Clock className="w-4 h-4 text-[#E5C378]" />
                  Operating Hours
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>Monday – Sunday:</span>
                    <span className="font-semibold text-white">9:30 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Walk-ins:</span>
                    <span className="text-emerald-400">Accepted Daily</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <p className="text-xs font-bold text-white">Salon Amenities:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Air Conditioned</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Bike & Car Parking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Hygienic Washrooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Family Waiting Sofa</span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Navigation Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                >
                  <Navigation className="w-4 h-4" />
                  Open Live Route in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Simulated Interactive Map Frame */}
          <div className="lg:col-span-7">
            <div className="gold-gradient-border shadow-2xl">
              <div className="gold-gradient-inner p-6 sm:p-8 space-y-5">
                
                {/* Map Simulation Visual */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[#101726] to-[#0A0E18] border border-slate-800 flex items-center justify-center p-6 text-center">
                  
                  {/* Subtle map grid vector lines */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />

                  {/* Pulsing Pin Center */}
                  <div className="relative z-10 space-y-4">
                    <div className="relative inline-block">
                      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center shadow-xl shadow-[#D4AF37]/30 animate-bounce">
                        <MapPin className="w-7 h-7 text-slate-950" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/50 rounded-full blur-xs" />
                    </div>

                    <div>
                      <h4 className="font-serif-luxury text-xl font-bold text-white">
                        Vasantha Family Salon
                      </h4>
                      <p className="text-xs text-[#E5C378] font-medium mt-0.5">
                        Karimnagar Urban Area, Telangana
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-sm mx-auto">
                        Click below to launch exact GPS coordinates and driving route via Google Maps.
                      </p>
                    </div>

                    <a
                      href={BUSINESS_INFO.googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-gold-outline px-5 py-2.5 rounded-xl text-xs font-bold"
                    >
                      <Compass className="w-4 h-4 text-[#D4AF37]" />
                      Launch Google Maps Navigation
                    </a>
                  </div>

                </div>

                {/* Road note */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                  <span>
                    Directions query targets the verified Google Maps listing: <code className="text-[#E5C378]">Vasantha Family Salon Karimnagar</code>.
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
