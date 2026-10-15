import { ServiceItem, PhotoRequirement, BusinessDetails } from '../types';

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
  typicalHours: "Daily 9:30 AM – 9:00 PM (Standard Karimnagar Salon Timings)",
  addressNote: "Karimnagar, Telangana. Exact street address and landmark to be confirmed by salon management."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "mens-haircut-styling",
    name: "Men's Precision Haircut & Styling",
    teluguName: "పురుషుల హెయిర్‌కట్ & స్టైలింగ్",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    durationMinutes: 30,
    description: "Custom tailored haircut aligned with your face structure, hair texture, and personal style, finished with soothing head wash and matte/shine styling.",
    features: [
      "Face shape analysis",
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
    description: "Layered cuts, feathering, curtain bangs, or modern bobs tailored to enhance your natural hair bounce and volume, followed by a thermal blowout.",
    features: [
      "Hair texture & density assessment",
      "Deep moisture cleansing shampoo",
      "Layering / feathering precision cutting",
      "Volumizing blowout with serum finish"
    ],
    recommendedFor: "Women wanting fresh volume, split-end removal, or trendy dramatic transformations.",
    customizable: true
  },
  {
    id: "moroccan-hair-spa",
    name: "Intensive Argan & Keratin Hair Spa",
    teluguName: "డీప్ హెయిర్ స్పా & రిపేర్ ట్రీట్మెంట్",
    category: "spa",
    categoryLabel: "Hair Spa",
    durationMinutes: 60,
    description: "Rejuvenating salon therapy designed to combat frizz, chemical dryness, and environmental sun damage with deep follicle conditioning and acupressure scalp massage.",
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
    description: "Ammonia-free rich tones, natural grey coverage, or trendy sun-kissed streaks blended with bond-protecting plex treatment.",
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

export const PHOTO_REQUIREMENTS: PhotoRequirement[] = [
  {
    id: "storefront-facade",
    title: "1. Storefront & Street Board",
    aspectRatio: "16:9 (Landscape)",
    resolution: "Min 1920 x 1080px (Sharp daylight)",
    whyNeeded: "Builds immediate street recognition for Karimnagar clients looking for the salon entrance.",
    tips: [
      "Take from the opposite side of the road in bright morning or evening light",
      "Ensure the 'Vasantha Family Salon' signboard is clearly legible",
      "Avoid parked vehicles obstructing the main door"
    ],
    sampleDescription: "Exterior street shot of Vasantha Family Salon showing board & glass door."
  },
  {
    id: "styling-stations",
    title: "2. Hair Styling Stations & Chairs",
    aspectRatio: "4:3 or 16:9 (Landscape)",
    resolution: "Min 2048 x 1536px",
    whyNeeded: "Displays the salon's hygiene, modern hydraulic chairs, mirror lighting, and spacious floor.",
    tips: [
      "Clean all mirror surfaces to eliminate fingerprint smudges",
      "Turn on all overhead and mirror warm LED ring lights",
      "Neatly organize scissor trays, blow dryers, and hair product bottles"
    ],
    sampleDescription: "Interior row of 3-5 styling chairs with bright backlit mirrors."
  },
  {
    id: "hair-spa-wash",
    title: "3. Hair Wash & Shampoo Lounge",
    aspectRatio: "4:3 (Landscape)",
    resolution: "Min 1920 x 1440px",
    whyNeeded: "Communicates comfort and relaxation during hair washes and spa treatments.",
    tips: [
      "Capture the reclining wash basin chairs with freshly folded towels",
      "Warm ambient lighting highlights the soothing spa environment",
      "Spotless shampoo station and brand-name shampoo bottles on display"
    ],
    sampleDescription: "Comfortable ergonomic reclining wash chairs with organized shampoo counter."
  },
  {
    id: "facial-spa-room",
    title: "4. Private Skin & Facial Room",
    aspectRatio: "4:3 (Landscape)",
    resolution: "Min 1920 x 1440px",
    whyNeeded: "Assures women and clients of complete privacy for facials, waxing, and massage rituals.",
    tips: [
      "Show pristine white or dark velvet bed covers and clean head cushions",
      "Soft mood lighting or aromatic diffuser in frame",
      "Display clean sanitization tray"
    ],
    sampleDescription: "Private treatment cabin with facial bed and steamer equipment."
  },
  {
    id: "reception-retail",
    title: "5. Reception Counter & Waiting Lounge",
    aspectRatio: "16:9 (Landscape)",
    resolution: "Min 1920 x 1080px",
    whyNeeded: "First impression showing family hospitality, comfortable couches, and retail products.",
    tips: [
      "Include the welcome desk, salon logo accent, and waiting sofa",
      "Showcase the branded haircare products rack neatly illuminated",
      "Keep the front desk clean and clutter-free"
    ],
    sampleDescription: "Front reception desk with client seating lounge."
  },
  {
    id: "stylist-team-action",
    title: "6. Master Stylists in Action",
    aspectRatio: "3:2 or 4:3",
    resolution: "Min 2048 x 1365px",
    whyNeeded: "Humanizes the salon and demonstrates professional expertise and care.",
    tips: [
      "Photograph a stylist trimming hair or styling with focused concentration",
      "Stylists in clean professional black uniforms / aprons",
      "Happy smiling customer reflection in mirror"
    ],
    sampleDescription: "Professional stylist in uniform crafting a modern fade or styling."
  }
];
