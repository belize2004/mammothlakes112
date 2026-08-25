export interface AmenityCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  items: Array<{
    title: string;
    detail?: string;
    badge?: string;
  }>;
}

export const amenityCategories: AmenityCategory[] = [
  {
    id: "warmth-living",
    name: "Living & Hearth",
    description: "Alpine comfort tuned for cozy evenings after long days on the mountain.",
    iconName: "Flame",
    items: [
      {
        title: "Real Wood Stove & Stone Hearth",
        detail: "Authentic wood-burning stove with firewood, firestarter, and kindling provided.",
        badge: "Essential",
      },
      {
        title: "Vaulted Ceilings & End-Unit Windows",
        detail: "Extra side window exposure and airy, open timber-framed ceiling architecture.",
      },
      {
        title: "Central Heating & Ceiling Fans",
        detail: "Fast, reliable temperature control for sub-zero winter nights or crisp summer days.",
      },
      {
        title: "Queen Sleeper Sofa with Memory Foam",
        detail: "Brand new high-density memory foam mattress (upgraded December 2024).",
      },
      {
        title: "Deluxe Vinyl Plank & Plush Carpeting",
        detail: "Modern alpine flooring throughout living room and loft.",
      },
    ],
  },
  {
    id: "kitchen-dining",
    name: "Gourmet Kitchen",
    description: "Fully remodeled in September 2021 with stainless appliances and chef essentials.",
    iconName: "UtensilsCrossed",
    items: [
      {
        title: "Full Kitchen Remodel (Sept 2021)",
        detail: "New custom cabinets, solid countertops, and granite composite sink.",
        badge: "Remodeled",
      },
      {
        title: "Modern Dishwasher & Stainless Appliances",
        detail: "Full-size refrigerator/freezer, stove/oven, microwave, and quiet dishwasher.",
      },
      {
        title: "Bonavita 8-Cup Thermal Coffee Maker",
        detail: "Premium thermal carafe coffee maker plus standard 5-cup glass carafe and filters.",
      },
      {
        title: "Small Appliances & Prep Tools",
        detail: "Blender, electric kettle, 4-slice toaster, mixing bowls, sharp knife set, baking sheets.",
      },
      {
        title: "Pantry Essentials & Glassware",
        detail: "Olive oil, salt & pepper, spices, wine glasses, cocktail tumblers, full dishware set.",
      },
      {
        title: "Eat-In Dining Nook",
        detail: "Dedicated dining table with seating for 4.",
      },
    ],
  },
  {
    id: "sleeping-baths",
    name: "Loft Master & Bathrooms",
    description: "Restorative sleep upstairs paired with dual bathroom convenience.",
    iconName: "BedDouble",
    items: [
      {
        title: "Loft Queen Platform Bed",
        detail: "Comfortable queen bed with Dormeo mattress topper and fresh premium linens (Nov 2024).",
        badge: "Dormeo Topper",
      },
      {
        title: "Remodeled Master Full Bath (Aug 2024)",
        detail: "Upstairs in loft: custom tile walk-in shower, glass door, modern vanity, hair dryer.",
        badge: "New Aug 2024",
      },
      {
        title: "Ground Floor Half Bath (Powder Room)",
        detail: "Convenient second bathroom downstairs so guests don't need to climb stairs.",
      },
      {
        title: "Spa & Bath Towels Provided",
        detail: "Plush bath towels plus oversized spa towels dedicated for the outdoor Jacuzzi.",
      },
      {
        title: "Roku Smart TV in Loft",
        detail: "Stream Netflix, Prime, HBO, and music directly in bed.",
      },
    ],
  },
  {
    id: "dog-gear",
    name: "Dog-Friendly & Alpine Gear",
    description: "Engineered specifically for adventure dogs and gear-heavy Sierra trips.",
    iconName: "Dog",
    items: [
      {
        title: "Dedicated Mud-Buster Paw Station",
        detail: "Mud-Buster cleaner, paw wiping towels, and specialized mud-trapping entryway mats.",
        badge: "Dog-First",
      },
      {
        title: "Dog Bowls & Furniture Covers",
        detail: "Food and water bowls, silicone splash mat, and cute couch protection covers.",
      },
      {
        title: "2 Reserved Front-Door Parking Spaces",
        detail: "Directly outside the front door—zero long walks carrying skis, boards, or heavy luggage.",
        badge: "Rare in Mammoth",
      },
      {
        title: "Alpine Entryway Gear Hooks & Storage",
        detail: "Dedicated hooks for jackets, boot staging, helmet racks, and hiking poles.",
      },
    ],
  },
  {
    id: "tech-entertainment",
    name: "High-Speed Tech & Media",
    description: "Fast fiber internet for remote mountain work and evening entertainment.",
    iconName: "Wifi",
    items: [
      {
        title: "250+ Mbps High-Speed Wi-Fi",
        detail: "High-bandwidth connection suitable for video conference calls and 4K streaming.",
        badge: "250+ Mbps",
      },
      {
        title: "48-Inch Living Room HDTV & Soundbar",
        detail: "Cable package, music channels, soundbar, and universal remote setup.",
      },
      {
        title: "DVD & Classic VHS Library",
        detail: "Curated collection of mountain films, classics, and board games (Jenga, Monopoly, Chess).",
      },
      {
        title: "Amazon Alexa Enabled",
        detail: "Voice-activated music, mountain weather forecasts, and timer controls.",
      },
    ],
  },
  {
    id: "spa-outdoors",
    name: "Complex Spa & Outdoors",
    description: "Relax in the high-Sierra mountain air right outside your door.",
    iconName: "Trees",
    items: [
      {
        title: "Outdoor 6-Person Heated Jacuzzi",
        detail: "Shared outdoor hot tub open year-round, steps away under snow-dusted pines.",
        badge: "Year-Round",
      },
      {
        title: "Peek-a-Boo Mountain Snow Check",
        detail: "Direct view of Lincoln Mountain from the kitchen window to check morning ski conditions.",
      },
      {
        title: "24/7 Secure Keypad Self Check-In",
        detail: "Arrive at your own schedule without waiting for keys or front desk lines.",
      },
      {
        title: "100 Yards to Free Mountain Shuttle",
        detail: "Town of Mammoth Lakes green/red line shuttle stop right outside the complex entrance.",
      },
    ],
  },
];
