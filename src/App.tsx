import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoKitSection } from './components/PhotoKitSection';
import { ServiceCatalog } from './components/ServiceCatalog';
import { ExperienceSection } from './components/ExperienceSection';
import { BusinessVerificationCard } from './components/BusinessVerificationCard';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { AppointmentModal } from './components/AppointmentModal';
import { OwnerPhoneModal } from './components/OwnerPhoneModal';
import { ReviewModal } from './components/ReviewModal';

export function App() {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Local state persisted in localStorage
  const [verifiedPhone, setVerifiedPhone] = useState<string>(() => {
    return localStorage.getItem('vasantha_verified_phone') || '';
  });

  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('vasantha_custom_photos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [reviews, setReviews] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('vasantha_client_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleToggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePhotoUpload = (id: string, url: string) => {
    setCustomPhotos((prev) => {
      const next = { ...prev };
      if (url) {
        next[id] = url;
      } else {
        delete next[id];
      }
      try {
        localStorage.setItem('vasantha_custom_photos', JSON.stringify(next));
      } catch (e) {
        console.warn('Failed to save to localStorage:', e);
      }
      return next;
    });
  };

  const handleSavePhone = (phone: string) => {
    setVerifiedPhone(phone);
    if (phone) {
      localStorage.setItem('vasantha_verified_phone', phone);
    } else {
      localStorage.removeItem('vasantha_verified_phone');
    }
  };

  const handleAddReview = (newReview: {
    name: string;
    rating: number;
    service: string;
    comment: string;
  }) => {
    const item = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setReviews((prev) => {
      const next = [item, ...prev];
      localStorage.setItem('vasantha_client_reviews', JSON.stringify(next));
      return next;
    });
  };

  const scrollToPhotoKit = () => {
    const el = document.getElementById('photo-kit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotoKit={scrollToPhotoKit}
        onOpenOwnerPhoneModal={() => setIsOwnerModalOpen(true)}
        verifiedPhone={verifiedPhone}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenPhotoKit={scrollToPhotoKit}
        />

        {/* Curated Service Catalog */}
        <ServiceCatalog
          selectedServiceIds={selectedServiceIds}
          onToggleService={handleToggleService}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Photography & Media Kit (Prompt Requirement for authentic photos) */}
        <PhotoKitSection
          customPhotos={customPhotos}
          onPhotoUpload={handlePhotoUpload}
        />

        {/* The Vasantha Experience & Hygiene Pillars */}
        <ExperienceSection />

        {/* Verified Business Information & Google Maps Transparency */}
        <BusinessVerificationCard
          verifiedPhone={verifiedPhone}
          onOpenOwnerModal={() => setIsOwnerModalOpen(true)}
        />

        {/* Client Reviews & Community Feedback */}
        <ReviewsSection
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          reviews={reviews}
        />

        {/* Location & Directions Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotoKit={scrollToPhotoKit}
        onOpenOwnerPhoneModal={() => setIsOwnerModalOpen(true)}
        verifiedPhone={verifiedPhone}
      />

      {/* Mobile Sticky Bar */}
      <MobileActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotoKit={scrollToPhotoKit}
        verifiedPhone={verifiedPhone}
      />

      {/* Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceIds={selectedServiceIds}
        onToggleService={handleToggleService}
        verifiedPhone={verifiedPhone}
      />

      <OwnerPhoneModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        currentPhone={verifiedPhone}
        onSavePhone={handleSavePhone}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}

export default App;
