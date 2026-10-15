import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle, ShieldCheck, MessageSquare } from 'lucide-react';

interface OwnerPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhone: string;
  onSavePhone: (phone: string) => void;
}

export const OwnerPhoneModal: React.FC<OwnerPhoneModalProps> = ({
  isOpen,
  onClose,
  currentPhone,
  onSavePhone
}) => {
  const [phoneNumber, setPhoneNumber] = useState(currentPhone || '');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPhoneNumber(currentPhone || '');
  }, [currentPhone]);

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

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSavePhone(phoneNumber.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
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
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#E5C378]" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                Salon Contact Verification
              </h3>
              <p className="text-[11px] text-slate-400">Vasantha Family Salon, Karimnagar</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          To maintain 100% genuine information, we do not invent phone numbers. Enter the official salon phone number below to enable the direct Call and WhatsApp buttons.
        </p>

        {saved ? (
          <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <p className="text-sm font-bold text-white">Phone Number Linked!</p>
            <p className="text-xs text-emerald-300">Call & WhatsApp buttons are now fully functional.</p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Official Salon Mobile / WhatsApp Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 94401 23456"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Include country code for WhatsApp support (e.g., +91 98480 12345).
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 btn-gold py-2.5 rounded-xl text-xs font-bold cursor-pointer"
              >
                Save & Activate Buttons
              </button>
              {currentPhone && (
                <button
                  type="button"
                  onClick={() => {
                    onSavePhone('');
                    setPhoneNumber('');
                    onClose();
                  }}
                  className="px-3 py-2.5 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 cursor-pointer"
                >
                  Clear Phone
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
