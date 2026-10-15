export interface ServiceItem {
  id: string;
  name: string;
  teluguName?: string;
  category: 'hair' | 'grooming' | 'spa' | 'skin' | 'kids' | 'bridal';
  categoryLabel: string;
  durationMinutes: number;
  description: string;
  features: string[];
  recommendedFor: string;
  image: string;
  customizable: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  teluguTitle?: string;
  category: 'interior' | 'styling' | 'spa' | 'grooming' | 'bridal';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface BusinessDetails {
  name: string;
  teluguName: string;
  tagline: string;
  city: string;
  state: string;
  country: string;
  googleMapsSearchUrl: string;
  status: 'active-search-listing';
  isPhoneVerified: boolean;
  phone?: string;
  whatsapp?: string;
  typicalHours: string;
  addressNote: string;
}

export interface AppointmentInquiry {
  clientName: string;
  phone: string;
  selectedServices: string[];
  preferredDate: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  genderPreference: 'men' | 'women' | 'any';
  notes: string;
  timestamp: string;
}

export interface ClientFeedback {
  id: string;
  name: string;
  date: string;
  service: string;
  rating: number;
  comment: string;
}
