import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Scissors, Check, Sparkles, User, Phone, MessageSquare, Send, Copy, Navigation, MapPin } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';
import confetti from 'canvas-confetti';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedServiceIds,
  onToggleService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [genderPref, setGenderPref] = useState<'men' | 'women' | 'any'>('any');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const selectedServices = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const totalDuration = selectedServices.reduce((acc, s) => acc + s.durationMinutes, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Trigger celebration
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#E5C378', '#F3E5AB', '#ffffff']
    });

    setSubmitted(true);
  };

  const formattedBookingText = `Hello Vasantha Family Salon, Karimnagar! 👋\n\nI would like to request an appointment:\n• Name: ${name}\n• Phone: ${phone}\n• Preferred Date: ${date}\n• Time Window: ${slot.toUpperCase()}\n• Services: ${selectedServices.map((s) => s.name).join(', ') || 'Custom Consultation'}\n• Preference: ${genderPref.toUpperCase()}\n• Notes: ${notes || 'None'}\n\nPlease confirm availability!`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(formattedBookingText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(formattedBookingText)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-title"
    >
      <div
        className="w-full max-w-xl bg-[#0E131F] border border-[#D4AF37]/35 rounded-2xl shadow-2xl shadow-black overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-[#141B2B] to-[#0E131F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#E5C378]" />
            </div>
            <div className="text-left">
              <h3 id="appointment-title" className="font-serif-luxury text-xl font-bold text-white">
                Reserve Salon Appointment
              </h3>
              <p className="text-xs text-[#E5C378]">Vasantha Family Salon • Karimnagar</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Appointment Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif-luxury text-2xl font-bold text-white">
                  Appointment Request Ready!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Your requested slot for <strong className="text-[#E5C378]">{date} ({slot})</strong> has been saved.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Services:</span>
                  <span className="text-white font-medium text-right max-w-[240px]">
                    {selectedServices.map((s) => s.name).join(', ') || 'Personal Styling Consultation'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Duration:</span>
                  <span className="text-[#E5C378] font-bold">~{totalDuration || 30} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Your Contact:</span>
                  <span className="text-white">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white">Karimnagar, Telangana</span>
                </div>
              </div>

              {/* Next Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Reservation on WhatsApp
                </a>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#E5C378]" />}
                  {copied ? 'Booking Summary Copied!' : 'Copy Summary to Clipboard'}
                </button>

                <a
                  href={BUSINESS_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold-outline py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Open Salon Location on Google Maps
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98480 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection Summary */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                  <span>Selected Rituals ({selectedServices.length})</span>
                  <span className="text-[11px] text-[#E5C378]">Est. Duration: ~{totalDuration} mins</span>
                </label>

                {selectedServices.length === 0 ? (
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-dashed border-slate-700 text-xs text-slate-400 text-center">
                    No specific service picked yet. (A personalized consultation will be scheduled).
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto p-1">
                    {selectedServices.map((service) => (
                      <span
                        key={service.id}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#E5C378]"
                      >
                        <Scissors className="w-3 h-3" />
                        {service.name}
                        <button
                          type="button"
                          onClick={() => onToggleService(service.id)}
                          className="hover:text-white cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Time Window
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['morning', 'afternoon', 'evening'] as const).map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSlot(t)}
                        className={`py-2 px-1 rounded-lg text-[11px] font-semibold capitalize transition-all cursor-pointer ${
                          slot === t
                            ? 'bg-[#D4AF37] text-slate-950 font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Special Notes / Styling Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Attending a family wedding this weekend, sensitive scalp, toddler's first haircut..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                >
                  <Send className="w-4 h-4" />
                  Confirm & Generate Appointment Request
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
