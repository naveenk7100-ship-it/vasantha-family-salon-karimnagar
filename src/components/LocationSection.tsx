import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Car, Compass, ExternalLink, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Real, responsive, free Google Maps search embed URL for Vasantha Family Salon, Karimnagar
  const embedUrl = "https://maps.google.com/maps?q=Vasantha+Family+Salon+Karimnagar&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-24 relative bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C378]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Map & Directions</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Find Us in <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Karimnagar, Telangana</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Karimnagar, catering to local families with accessible parking and clean, comfortable salon facilities.
          </p>
        </div>

        {/* Location Card & Real Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="salon-card p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-2 text-left">
                <span className="text-[11px] font-bold text-[#E5C378] uppercase tracking-wider">
                  Salon Destination
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Vasantha Family Salon
                </h3>
                <p className="font-telugu text-sm text-[#D4AF37] font-semibold">
                  వసంత ఫ్యామిలీ సెలూన్ • కరీంనగర్
                </p>
                <p className="text-sm text-slate-300 flex items-start gap-2 pt-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Karimnagar, Telangana - 505001, India</span>
                </p>
                <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                  Listed on Google Maps. Exact street number and landmark to be confirmed directly upon appointment or visit.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Clock className="w-4 h-4 text-[#E5C378]" />
                  Operating Hours
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-300">
                    <span>Monday – Sunday:</span>
                    <span className="font-semibold text-white">9:30 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Walk-ins:</span>
                    <span className="text-emerald-400 font-semibold">Welcomed Daily</span>
                  </div>
                  <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/80">
                    Standard family salon schedule in Karimnagar.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-2 border-t border-slate-800 space-y-2 text-left">
                <p className="text-xs font-bold text-white">Featured Amenities:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Air Conditioned</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Street & Bike Parking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Child-Safe Chairs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Family Waiting Lounge</span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="pt-4">
                <a
                  href={BUSINESS_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  Open Live in Google Maps App
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Real Responsive Google Maps Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="gold-gradient-border shadow-2xl flex-1 flex flex-col">
              <div className="gold-gradient-inner p-3 sm:p-4 rounded-2xl flex-1 flex flex-col space-y-3">
                
                {/* Real Google Maps Embed Container */}
                <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col">
                  
                  {/* Real Google Maps iframe */}
                  {!mapError ? (
                    <iframe
                      title="Google Maps Location - Vasantha Family Salon, Karimnagar"
                      src={embedUrl}
                      className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0 rounded-xl"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setMapLoaded(true)}
                      onError={() => setMapError(true)}
                    />
                  ) : (
                    /* Honest fallback in case network blocks iframe */
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                        <AlertCircle className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif-luxury text-xl font-bold text-white">
                          Open in Google Maps
                        </h4>
                        <p className="text-xs text-slate-300 max-w-sm">
                          Direct live route navigation is available via the official Google Maps search query for Karimnagar.
                        </p>
                      </div>
                      <a
                        href={BUSINESS_INFO.googleMapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                      >
                        <Compass className="w-4 h-4" />
                        Launch Google Maps Navigation
                      </a>
                    </div>
                  )}

                </div>

                {/* Sub-bar with Live Route Link */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#E5C378] shrink-0" />
                    <span>Search Query: <strong className="text-slate-200">Vasantha Family Salon Karimnagar</strong></span>
                  </div>

                  <a
                    href={BUSINESS_INFO.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5C378] font-bold hover:underline flex items-center gap-1 shrink-0"
                  >
                    View Larger Map <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
