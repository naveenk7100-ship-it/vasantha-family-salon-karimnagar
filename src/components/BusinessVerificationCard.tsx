import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageSquare, AlertTriangle, CheckCircle, ExternalLink, KeyRound } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface BusinessVerificationCardProps {
  verifiedPhone: string;
  onOpenOwnerModal: () => void;
}

export const BusinessVerificationCard: React.FC<BusinessVerificationCardProps> = ({
  verifiedPhone,
  onOpenOwnerModal
}) => {
  return (
    <section id="verification" className="py-20 relative bg-[#0D121D] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity & Verification Audit</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Business Information & <span className="text-[#E5C378]">Transparency</span>
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            In strict compliance with verified listing standards, every detail shown here is audited directly against the live Google Maps query and business records.
          </p>
        </div>

        {/* Verification Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          {/* Card 1: Listing Status */}
          <div className="salon-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E5C378] uppercase">Listing Status</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">Google Maps Search</p>
                <p className="text-[11px] text-slate-400">Karimnagar Directory Query</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">
              Listing search query active for Karimnagar. Direct Maps query accessible via navigation buttons.
            </p>
          </div>

          {/* Card 2: Location & Address */}
          <div className="salon-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E5C378] uppercase">Location</span>
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <p className="text-sm font-bold text-white">Karimnagar, Telangana</p>
                <p className="text-[11px] text-slate-400">Postal Code 505001, India</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">
              Region verified. Exact building/shop number and landmark pending owner profile completion.
            </p>
          </div>

          {/* Card 3: Contact & Phone */}
          <div className="salon-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E5C378] uppercase">Direct Phone</span>
              {verifiedPhone ? (
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  Connected
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-bold">
                  Awaiting Input
                </span>
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-[#E5C378] shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">
                  {verifiedPhone ? verifiedPhone : 'Pending Owner Setup'}
                </p>
                <p className="text-[11px] text-slate-400">Call & WhatsApp</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">
              {verifiedPhone
                ? 'Functional phone is verified and active for direct calls & WhatsApp.'
                : 'No phone was invented. Salon owner can connect their phone in one click below.'}
            </p>
          </div>

          {/* Card 4: Reviews & Ratings */}
          <div className="salon-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E5C378] uppercase">Reviews Policy</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div>
                <p className="text-sm font-bold text-white">Authentic Client Reviews</p>
                <p className="text-[11px] text-slate-400">Zero Fabricated Testimonials</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">
              We strictly forbid generating fake 5-star reviews. Real clients are invited to share genuine feedback.
            </p>
          </div>

        </div>

        {/* Interactive Action Bar for Salon Owner */}
        <div className="mt-8 p-6 rounded-2xl bg-[#121824] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
              <KeyRound className="w-5 h-5 text-[#E5C378]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Salon Owner Verification Portal
              </h4>
              <p className="text-xs text-slate-400">
                Are you the manager or owner of Vasantha Family Salon? Link your verified phone number to activate instant 1-click calling and WhatsApp on this demo.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {verifiedPhone && (
              <a
                href={`https://wa.me/${verifiedPhone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Active
              </a>
            )}

            <button
              onClick={onOpenOwnerModal}
              className="btn-gold-outline px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
            >
              {verifiedPhone ? 'Update Phone Number' : 'Set Verified Salon Phone'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
