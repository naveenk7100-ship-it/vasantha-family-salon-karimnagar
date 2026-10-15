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
    image: getImgUrl("beard-grooming.jpg"),
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
    image: getImgUrl("beard-grooming.jpg"),
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
    image: getImgUrl("haircut-women.jpg"),
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
    image: getImgUrl("hair-spa.jpg"),
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
    image: getImgUrl("facial-treatment.jpg"),
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
    image: getImgUrl("facial-treatment.jpg"),
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
    image: getImgUrl("kids-styling.jpg"),
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
    image: getImgUrl("hair-color.jpg"),
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
    image: getImgUrl("styling-chairs.jpg"),
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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Luxury Styling Stations",
    teluguTitle: "స్టైలింగ్ స్టేషన్స్",
    category: "interior",
    categoryLabel: "Salon Interior",
    image: getImgUrl("styling-chairs.jpg"),
    description: "Hydraulic designer chairs, expansive illuminated mirrors, and spacious styling bays designed for relaxed personal attention."
  },
  {
    id: "gallery-2",
    title: "Reclining Shampoo & Spa Lounge",
    teluguTitle: "హెయిర్ వాష్ & స్పా లాంజ్",
    category: "spa",
    categoryLabel: "Hair Spa",
    image: getImgUrl("wash-lounge.jpg"),
    description: "Ergonomic wash basins with gentle water pressure control and soothing ambient lighting for restful hair wash rituals."
  },
  {
    id: "gallery-3",
    title: "Designer Women's Haircut & Blowout",
    teluguTitle: "మహిళల హెయిర్ స్టైలింగ్",
    category: "styling",
    categoryLabel: "Hair Styling",
    image: getImgUrl("haircut-women.jpg"),
    description: "Precision shear feathering, texture balancing, and bouncy thermal blowouts tailored to individual face geometry."
  },
  {
    id: "gallery-4",
    title: "Royal Beard Contouring",
    teluguTitle: "బియర్డ్ గ్రూమింగ్",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    image: getImgUrl("beard-grooming.jpg"),
    description: "Crisp razor lines, beard conditioning oils, and warm herbal towels for gentlemen seeking a sharp, executive look."
  },
  {
    id: "gallery-5",
    title: "Balayage & Dimensional Color",
    teluguTitle: "క్రియేటివ్ హెయిర్ కలర్",
    category: "styling",
    categoryLabel: "Color Studio",
    image: getImgUrl("hair-color.jpg"),
    description: "Expert foil placement, seamless color transitions, and conditioning toners that preserve natural hair vitality."
  },
  {
    id: "gallery-6",
    title: "Restorative Scalp & Hair Masque",
    teluguTitle: "డీప్ కండిషనింగ్ స్పా",
    category: "spa",
    categoryLabel: "Hair Spa",
    image: getImgUrl("hair-spa.jpg"),
    description: "Intense argan and keratin scalp rejuvenation that hydrates dry, frizzy strands and promotes scalp wellness."
  },
  {
    id: "gallery-7",
    title: "Radiance Facial & Skin Suite",
    teluguTitle: "స్కిన్ & ఫేషియల్ కేర్",
    category: "spa",
    categoryLabel: "Skin Suite",
    image: getImgUrl("facial-treatment.jpg"),
    description: "Private aesthetic treatment suite for deep pore cleansing, botanical masks, and ultrasonic skin smoothing."
  },
  {
    id: "gallery-8",
    title: "Child-Friendly Haircut Experience",
    teluguTitle: "చిన్నారుల సంరక్షణ",
    category: "interior",
    categoryLabel: "Kids Corner",
    image: getImgUrl("kids-styling.jpg"),
    description: "Warm, cheerful, and patient haircuts for kids with rounded safety shears and stress-free care."
  },
  {
    id: "gallery-9",
    title: "Sterilized Professional Toolkit",
    teluguTitle: "పరిశుభ్రత & శానిటైజేషన్",
    category: "interior",
    categoryLabel: "Hygiene Standard",
    image: getImgUrl("salon-tools.jpg"),
    description: "Hospital-grade UV sterilization for scissors, clipper guards, and combs, paired with single-use client capes."
  }
];
