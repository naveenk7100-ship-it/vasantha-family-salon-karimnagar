import { ServiceItem, GalleryItem, BusinessDetails } from '../types';

const base = import.meta.env.BASE_URL;
export const getImgUrl = (filename: string) => `${base}images/${filename}`;

export const BUSINESS_INFO: BusinessDetails = {
  name: "Vasantha Family Salon",
  teluguName: "వసంత ఫ్యామిలీ సెలూన్",
  tagline: "Karimnagar's Destination for Modern Family Hair Styling & Personal Care",
  city: "Karimnagar",
  state: "Telangana",
  country: "India",
  googleMapsSearchUrl: "https://www.google.com/maps/search/Vasantha+Family+Salon+Karimnagar",
  status: "active-search-listing",
  isPhoneVerified: false,
  typicalHours: "Daily 9:30 AM – 9:00 PM (Standard salon schedule in Karimnagar)",
  addressNote: "Karimnagar, Telangana - 505001. Listed on Google Maps. Exact street address and landmark to be confirmed directly upon appointment or visit."
};

/* 9 Completely Unique Service Images (No overlap with Gallery, Hero, or About) */
export const SERVICES: ServiceItem[] = [
  {
    id: "mens-haircut-styling",
    name: "Men's Precision Haircut & Styling",
    teluguName: "పురుషుల హెయిర్‌కట్ & స్టైలింగ్",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    durationMinutes: 30,
    image: getImgUrl("service-mens-haircut.jpg"),
    description: "Custom tailored haircut aligned with your face structure, hair texture, and personal style, finished with soothing head wash and matte/shine styling.",
    features: [
      "Face shape analysis & texture check",
      "Precision scissor & clipper blend",
      "Refreshing scalp rinse",
      "Professional styling product finish"
    ],
    recommendedFor: "Gentlemen seeking crisp fades, classic cuts, or modern textured crops.",
    customizable: true
  },
  {
    id: "beard-sculpt-hot-towel",
    name: "Royal Beard Contouring & Hot Towel Shave",
    teluguName: "రాయల్ బియర్డ్ కాంటూరింగ్ & హాట్ టవల్",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    durationMinutes: 25,
    image: getImgUrl("service-beard-sculpt.jpg"),
    description: "Sculpted beard shaping with razor-sharp cheek line definition, warm steam towel treatment, and nourishing organic beard oil massage.",
    features: [
      "Precision razor edge alignment",
      "Warm botanical steam towel",
      "Exfoliating skin prep",
      "Nourishing beard butter & oil finish"
    ],
    recommendedFor: "Sharp grooming for corporate professionals, weddings, and weekend styling.",
    customizable: true
  },
  {
    id: "womens-creative-haircut",
    name: "Women's Designer Haircut & Blowout",
    teluguName: "మహిళల డిజైనర్ హెయిర్‌కట్ & బ్లోడ్రై",
    category: "hair",
    categoryLabel: "Women's Hair",
    durationMinutes: 45,
    image: getImgUrl("service-womens-haircut.jpg"),
    description: "Layered cuts, feathering, curtain bangs, or modern bobs tailored to enhance natural hair bounce and volume, followed by a thermal blowout.",
    features: [
      "Hair texture & density assessment",
      "Deep moisture cleansing shampoo",
      "Layering / feathering precision cutting",
      "Volumizing blowout with serum finish"
    ],
    recommendedFor: "Women wanting fresh volume, split-end removal, or trendy transformations.",
    customizable: true
  },
  {
    id: "moroccan-hair-spa",
    name: "Intensive Argan & Keratin Hair Spa",
    teluguName: "డీప్ హెయిర్ స్పా & రిపేర్ ట్రీట్మెంట్",
    category: "spa",
    categoryLabel: "Hair Spa",
    durationMinutes: 60,
    image: getImgUrl("service-hair-spa.jpg"),
    description: "Rejuvenating salon therapy designed to combat frizz, chemical dryness, and environmental damage with deep follicle conditioning and acupressure scalp massage.",
    features: [
      "Deep pore scalp detoxification",
      "Hydro-nourishing argan masque",
      "Steaming therapy for cuticle absorption",
      "Relaxing 15-minute head & shoulder massage"
    ],
    recommendedFor: "Dry, frizzy, colored, or heat-damaged hair needing silky softness.",
    customizable: true
  },
  {
    id: "skin-radiance-facial",
    name: "Glow Radiance Herbal & Fruit Facial",
    teluguName: "గ్లో రేడియన్స్ హెర్బల్ ఫేషియల్",
    category: "skin",
    categoryLabel: "Skin Care",
    durationMinutes: 50,
    image: getImgUrl("service-skin-facial.jpg"),
    description: "Gentle multi-step skin rejuvenation including ultrasonic cleansing, botanical exfoliation, vitamin pack, and lymphatic drainage face massage.",
    features: [
      "Deep pore unclogging & blackhead extraction",
      "Fruit antioxidant scrub",
      "Re-hydrating dermal gel massage",
      "Brightening firming face masque"
    ],
    recommendedFor: "Dull or tired skin needing immediate radiance before festive occasions.",
    customizable: true
  },
  {
    id: "tan-removal-skin-polish",
    name: "Full Face & Neck De-Tan Therapy",
    teluguName: "డీ-టాన్ థెరపీ & స్కిన్ పాలిషింగ్",
    category: "skin",
    categoryLabel: "Skin Care",
    durationMinutes: 35,
    image: getImgUrl("service-detan-polish.jpg"),
    description: "Clinically formulated milk & kojic therapy to dissolve sun tanning, hyperpigmentation, and daily dirt buildup safely without harsh bleach.",
    features: [
      "Gentle AHA-infused de-tan application",
      "Cooling aloe vera soothing compress",
      "Pigmentation tone balancing",
      "SPF 50 protective finish"
    ],
    recommendedFor: "Outdoor commuters and individuals seeking even, bright skin tone.",
    customizable: true
  },
  {
    id: "kids-fun-haircut",
    name: "Gentle Kids Styling & Haircut",
    teluguName: "చిన్నారుల హెయిర్‌కట్",
    category: "kids",
    categoryLabel: "Kids Styling",
    durationMinutes: 20,
    image: getImgUrl("service-kids-haircut.jpg"),
    description: "Patience-focused, gentle haircut experience crafted especially for boys and girls in a warm, welcoming family environment.",
    features: [
      "Child-safe rounded shears and quiet clippers",
      "Friendly, caring stylists who understand kids",
      "Quick, fuss-free modern cuts",
      "Complimentary styling & fun treat"
    ],
    recommendedFor: "Toddlers and school children wanting neat, comfortable haircuts.",
    customizable: true
  },
  {
    id: "hair-color-streaks-highlights",
    name: "Global Hair Color & Balayage Highlights",
    teluguName: "గ్లోబల్ కలర్ & హైలైట్స్",
    category: "hair",
    categoryLabel: "Women's Hair",
    durationMinutes: 90,
    image: getImgUrl("service-hair-color.jpg"),
    description: "Ammonia-conscious rich tones, natural grey coverage, or trendy sun-kissed streaks blended with bond-protecting plex treatment.",
    features: [
      "Color shade consultation & strand test",
      "Ammonia-conscious safe formulations",
      "Plex bond-protecting additive",
      "Shine-enhancing glaze seal"
    ],
    recommendedFor: "Complete grey blending, vibrant fashion streaks, or caramel balayage.",
    customizable: true
  },
  {
    id: "bridal-family-grooming-package",
    name: "Celebration & Event Makeover Package",
    teluguName: "ఈవెంట్ & బ్రైడల్ మేకోవర్",
    category: "bridal",
    categoryLabel: "Bridal & Events",
    durationMinutes: 120,
    image: getImgUrl("service-bridal-makeover.jpg"),
    description: "Comprehensive head-to-toe grooming curation for brides, grooms, and family members attending weddings, receptions, and festivals in Karimnagar.",
    features: [
      "Complete hair spa & customized styling",
      "Advanced skin glow treatment",
      "Manicure & pedicure grooming",
      "Custom drape & hairstyling consultation"
    ],
    recommendedFor: "Engagements, wedding ceremonies, festival gatherings, and celebrations.",
    customizable: true
  }
];

/* 9 Completely Unique Gallery Images (Authentic Tour Captures & Professional Styling) */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Reception & Welcoming Lounge",
    teluguTitle: "సెలూన్ రిసెప్షన్ & లాంజ్",
    category: "interior",
    categoryLabel: "Tour Capture",
    image: getImgUrl("tour-reception-desk.jpg"),
    description: "Authentic salon interior walkthrough capture: Front reception counter, modern geometric design, and welcoming family hospitality."
  },
  {
    id: "gallery-2",
    title: "Reclining Shampoo & Spa Wash Lounge",
    teluguTitle: "హెయిర్ వాష్ & స్పా లాంజ్",
    category: "spa",
    categoryLabel: "Tour Capture",
    image: getImgUrl("tour-wash-lounge.jpg"),
    description: "Authentic salon interior walkthrough capture: Ergonomic wash basins with gentle water pressure control and soothing ambient decor."
  },
  {
    id: "gallery-3",
    title: "Private Aesthetic & Beauty Suite",
    teluguTitle: "బ్యూటీ & ఫేషియల్ సూట్",
    category: "spa",
    categoryLabel: "Tour Capture",
    image: getImgUrl("tour-facial-suite.jpg"),
    description: "Authentic salon interior walkthrough capture: Dedicated private treatment suite with chandelier, ring light, and comfortable skincare setup."
  },
  {
    id: "gallery-4",
    title: "Royal Barber Grooming Bay",
    teluguTitle: "బియర్డ్ గ్రూమింగ్ బే",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    image: getImgUrl("gallery-barber-chair.jpg"),
    description: "Dedicated men's styling chair with vintage aesthetic, hot towel steamer, and sharp beard grooming tools."
  },
  {
    id: "gallery-5",
    title: "Artisan Haircut & Volumizing Blowout",
    teluguTitle: "మహిళల హెయిర్ స్టైలింగ్",
    category: "styling",
    categoryLabel: "Hair Styling",
    image: getImgUrl("gallery-blowout-styling.jpg"),
    description: "Precision shear feathering, texture balancing, and bouncy thermal blowouts tailored to individual face geometry."
  },
  {
    id: "gallery-6",
    title: "Creative Balayage & Foil Highlights",
    teluguTitle: "క్రియేటివ్ హెయిర్ కలర్",
    category: "styling",
    categoryLabel: "Color Studio",
    image: getImgUrl("gallery-color-foils.jpg"),
    description: "Expert foil placement, seamless color transitions, and conditioning toners that preserve natural hair vitality."
  },
  {
    id: "gallery-7",
    title: "Deep Follicle Scalp Therapy",
    teluguTitle: "డీప్ కండిషనింగ్ స్పా",
    category: "spa",
    categoryLabel: "Hair Spa",
    image: getImgUrl("gallery-scalp-spa.jpg"),
    description: "Intense argan and keratin scalp rejuvenation that hydrates dry, frizzy strands and promotes scalp wellness."
  },
  {
    id: "gallery-8",
    title: "Family & Youth Styling Care",
    teluguTitle: "కుటుంబ & చిన్నారుల సంరక్షణ",
    category: "interior",
    categoryLabel: "Family Care",
    image: getImgUrl("gallery-family-moment.jpg"),
    description: "Cheerful, patient styling for teens and children ensuring an enjoyable visit for the whole family."
  },
  {
    id: "gallery-9",
    title: "Sanitized Professional Shear Toolkit",
    teluguTitle: "పరిశుభ్రమైన ఉపకరణాలు",
    category: "interior",
    categoryLabel: "Care Standard",
    image: getImgUrl("gallery-shears-tools.jpg"),
    description: "Carefully sanitized professional shears, precision combs, and premium organic hair serums."
  }
];
