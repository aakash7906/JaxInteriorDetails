// Client website assets & verified imagery from https://jaxinteriordetail.com/
export interface ServiceTier {
  id: string
  tierNumber: string
  tag: string
  duration: string
  title: string
  price: string
  numericPrice: number
  image: string
  desc: string
  detailedOverview: string
  highlights: { label: string; desc: string }[]
  pointsCount: number | string
  points: string[]
  recommendedFor: string
  featuresList: { name: string; included: boolean }[]
}

export const SITE_IMAGES = {
  // Hero / Interior signature
  heroInterior: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/ee13812abda38bbb26629068572c1d5c.jpg',
  // Detailing / Foam wash & exterior
  exteriorWash: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/84cbbe4f7e4f179ca459cee4e85f2ca1.jpg',
  // Steam extraction / Carpet work
  steamExtraction: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/8f9de9909aed950c17ef8e211529655d.jpg',
  // Perforated leather conditioning
  leatherCare: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/82a11ad4a8b50bdffc856dc8893f877a.jpg',
  // Official Before & After Minivan (downloaded from Juxtapose slider on jaxinteriordetail.com)
  minivanBefore: '/images/minivan-before.png',
  minivanAfter: '/images/minivan-after.png',
  // Official Before & After Graphite SUV Exterior
  suvDirty: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/1acac9eab46b7cd5295ff3f591375a23.png',
  suvSpotless: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/6cf0404416efbc80ba79e1927743037d.png',
  // Luxury vehicle showcase & mobile atelier
  luxurySuvSunset: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/d41114220971c065ae692b72b54e59a3.png',
  aboutHero: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/5b8df8b505b45f3fbfa9a4a5ba23dca7.jpg',
  mobileWork1: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/3d9a38fb295dbf625f228bbf72efecc9.jpg',
  mobileWork2: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/3e49623b0a60bd266520f3a944337716.jpg',
  // Aliases for compatibility
  beforeCarpet: '/images/minivan-before.png',
  afterCarpet: '/images/minivan-after.png',
  beforeDoor: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/1acac9eab46b7cd5295ff3f591375a23.png',
  afterDoor: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/6cf0404416efbc80ba79e1927743037d.png',
  // Gallery showcase
  gallery1: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/efe82df4e229ad18296e097a37f494ad.jpg',
  gallery2: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/89980ee17ded6d21acb4d970fb452891.jpg',
  gallery3: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/1153accf93da0bdd92a81a69ddf6e828.jpg',
  gallery4: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/d41114220971c065ae692b72b54e59a3.png',
  // Porsche black concourse
  porscheFullWorks: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
  creviceWork: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80',
  teamDetailer: 'https://horizons-cdn.hostinger.com/ad8dbca0-cd5a-4012-a846-1198b50657c7/3d9a38fb295dbf625f228bbf72efecc9.jpg'
}

export const BUSINESS_INFO = {
  name: 'Jax Detail',
  fullName: 'Jax Interior Detail',
  phone: '(904) 228-0074',
  rawPhone: '9042280074',
  email: 'paulceki1205@gmail.com',
  serviceArea: 'Jacksonville & within 30 miles',
  hours: 'Mon - Fri, 9:00 AM - 6:00 PM ET',
  address: 'Mobile Atelier serving Jacksonville, Ponte Vedra Beach, St. Johns & Atlantic Beach',
  rating: '5.0',
  reviewsCount: '100% 5-Star Reviews',
  owner: 'Paul Ceki',
  mission: 'To bring bespoke, hospital-clean interior rejuvenation and mirror-finish vehicle detailing directly to Jacksonville residences, avoiding shop lines while preserving client time.'
}

export const SERVICES_DATA: ServiceTier[] = [
  {
    id: 'interior-detailing',
    tierNumber: 'TIER 01',
    tag: 'SIGNATURE SPECIALTY',
    duration: '2-3 hrs',
    title: 'Interior Detailing',
    price: '$180',
    numericPrice: 180,
    image: SITE_IMAGES.heroInterior,
    desc: 'Deep restorative therapy for fine-cabin surfaces. We extract high-traffic soil, treat stubborn upholstery stains, and gently condition rich hides to factory matte purity.',
    detailedOverview: 'Our signature specialty treatment targets deep fiber extraction, steam sanitization, leather conditioning, and air vent purges. Engineered for vehicles enduring daily commutes, beach sand, pet dander, or stubborn stains.',
    recommendedFor: 'Drivers needing showroom-quality interior restoration, stain removal, odor neutralization, and leather hydration without sticky synthetic gloss.',
    highlights: [
      { label: 'Hot Water Extraction', desc: 'Deep soil lift' },
      { label: 'Deep Fiber Shampoo', desc: 'Restores pile' },
      { label: 'UV Matte Protection', desc: 'Non-greasy shield' },
    ],
    pointsCount: 8,
    points: [
      'High-power hot water soil extraction for carpets & floor mats',
      'Deep shampooing & stain lifting on fabric seats & headliner',
      'pH-neutral gentle leather wash and matte rejuvenation conditioner',
      'Steam cleaning & disinfection of air vent tracks & dashboard crevices',
      'Door panels, jambs, thresholds & sills wiped down and sealed',
      'Center console, cup holders, dials & infotainment screen micro-cleaned',
      'Pet hair & fiber entanglement extraction (deep mechanical drill brush)',
      'Streak-free interior crystal window & rearview mirror polish',
    ],
    featuresList: [
      { name: 'Heated Steam Sanitization', included: true },
      { name: 'High-Temp Fiber Soil Extraction', included: true },
      { name: 'Leather Deep Cleansing & Conditioning', included: true },
      { name: 'Air Vent Needle Purge', included: true },
      { name: 'Grit-Guard Exterior Hand Wash', included: false },
      { name: 'Paint Hydrophobic Sealant', included: false },
    ],
  },
  {
    id: 'exterior-detailing',
    tierNumber: 'TIER 02',
    tag: 'CERAMIC SAFE',
    duration: '2 hrs',
    title: 'Exterior Detailing',
    price: '$140',
    numericPrice: 140,
    image: SITE_IMAGES.exteriorWash,
    desc: 'Zero-swirl contact wash engineered for soft clear coats. Removes ferocious road grime, dissolves brake dust within wheel barrels, and seals clear coats with a hydrophobic shield.',
    detailedOverview: 'A careful multi-stage exterior purification including touchless snow foam pre-soak, dual-bucket hand contact wash, chemical iron decon of wheels, and 3-month hydrophobic ceramic sealant protection.',
    recommendedFor: 'Vehicles with road contamination, brake dust buildup, bug splatters, or dull paint seeking high gloss and intense water beading.',
    highlights: [
      { label: 'Foam Cannon Pre-Soak', desc: 'Loosens abrasives' },
      { label: 'Barrel Deep Clean', desc: 'Brake dust purge' },
      { label: 'SiO2 Gloss Sealant', desc: 'Hydrophobic protection' },
    ],
    pointsCount: 6,
    points: [
      'High-lubricity foam pre-wash to lift road film without scratching',
      'Two-bucket grit guard hand wash with ultra-plush microfiber mitts',
      'Iron decontaminating wheel barrel & caliper wash, tire scrub',
      'Bug splatter, tar & tree sap non-abrasive chemical purge',
      'Hydrophobic SiO2 ceramic booster applied for water sheeting & gloss',
      'Warm filtered air blow-dry and satin UV tyre dressing application',
    ],
    featuresList: [
      { name: 'Foam Cannon Pre-Soak', included: true },
      { name: 'Grit-Guard Hand Wash', included: true },
      { name: 'Wheel Barrel & Caliper Decon', included: true },
      { name: 'SiO2 Hydrophobic Protection', included: true },
      { name: 'Deep Interior Carpet Extraction', included: false },
      { name: 'Leather Conditioning Therapy', included: false },
    ],
  },
  {
    id: 'the-full-works',
    tierNumber: 'TIER 03',
    tag: 'CONCOURS COMPLETE',
    duration: '4-5 hrs',
    title: 'The Full Works',
    price: '$310',
    numericPrice: 310,
    image: SITE_IMAGES.porscheFullWorks,
    desc: 'The ultimate dual-envelope restoration. Harmonizes surgical interior upholstery extraction and steam sanitization with mirror-finish paint decontamination and premium gloss prep.',
    detailedOverview: 'Our total-vehicle rejuvenation package combining our comprehensive 8-step Interior Detailing and 6-step Hydrophobic Hand Wash, plus engine bay dressing and exhaust tip metal polishing.',
    recommendedFor: 'Complete vehicle resets, lease returns, pre-sale preparation, or seasonal restoration for collector and luxury vehicles.',
    highlights: [
      { label: 'Inside & Out Comprehensive', desc: 'Top tier reset' },
      { label: 'Engine Bay Wiped & Dressed', desc: 'Clean aesthetics' },
      { label: '30° Finish Deep Gloss Coat', desc: 'Showroom look' },
    ],
    pointsCount: 'Complete Package',
    points: [
      'Includes all 8 steps of the Precision Interior Detailing',
      'Includes all 6 steps of the Hydrophobic Exterior Hand Wash',
      'Light cosmetic engine bay wipe down and satin conditioning',
      'Exhaust tip metal polishing and carbon residue removal',
      'Exterior synthetic paint sealant with 3-month slick durability',
      'Door jamb degrease, hinge lubrication wipe, and clear coat seal',
    ],
    featuresList: [
      { name: 'Heated Steam Sanitization', included: true },
      { name: 'High-Temp Fiber Soil Extraction', included: true },
      { name: 'Leather Deep Cleansing & Conditioning', included: true },
      { name: 'Foam Cannon Pre-Soak & Hand Wash', included: true },
      { name: 'Wheel Barrel & Caliper Decon', included: true },
      { name: 'Cosmetic Engine Bay Dressing', included: true },
    ],
  },
]
