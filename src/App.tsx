import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServiceCatalog } from './components/ServiceCatalog';
import { GallerySection } from './components/GallerySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { AppointmentModal } from './components/AppointmentModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ReviewModal } from './components/ReviewModal';
import { IntroVideoOverlay } from './components/IntroVideoOverlay';
import { GalleryItem, ClientFeedback } from './types';
import { GALLERY_ITEMS } from './data/salonData';

export function App() {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  // Cinematic Intro Video Overlay state with reduced-motion check and session memory
  const [isIntroOpen, setIsIntroOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return false;
        const alreadySeen = sessionStorage.getItem('vasantha_intro_seen');
        if (alreadySeen === 'true') return false;
        return true;
      } catch {
        return false;
      }
    }
    return false;
  });

  // Client feedback stored locally
  const [reviews, setReviews] = useState<ClientFeedback[]>(() => {
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

  const handleAddReview = (newReview: {
    name: string;
    rating: number;
    service: string;
    comment: string;
  }) => {
    const item: ClientFeedback = {
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
      try {
        localStorage.setItem('vasantha_client_reviews', JSON.stringify(next));
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  };

  // Lightbox Navigation
  const handlePrevPhoto = () => {
    if (!activeGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeGalleryItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveGalleryItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!activeGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeGalleryItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActiveGalleryItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTour={() => setIsIntroOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenTour={() => setIsIntroOpen(true)}
        />

        {/* About Section */}
        <AboutSection onOpenTour={() => setIsIntroOpen(true)} />

        {/* Curated Service Catalog with Category Filtering & Real Imagery */}
        <ServiceCatalog
          selectedServiceIds={selectedServiceIds}
          onToggleService={handleToggleService}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Real Photo Gallery with Lightbox Previews */}
        <GallerySection onSelectPhoto={(item) => setActiveGalleryItem(item)} />

        {/* The Vasantha Experience & Hygiene Difference */}
        <ExperienceSection />

        {/* Quality Standards & Authentic Feedback */}
        <ReviewsSection
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          reviews={reviews}
        />

        {/* Location & Directions Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceIds={selectedServiceIds}
        onToggleService={handleToggleService}
      />

      <ImageLightboxModal
        item={activeGalleryItem}
        onClose={() => setActiveGalleryItem(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />

      {/* Cinematic Intro Video Overlay */}
      <IntroVideoOverlay
        isOpen={isIntroOpen}
        onClose={() => setIsIntroOpen(false)}
      />
    </div>
  );
}

export default App;
