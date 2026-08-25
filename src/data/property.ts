export interface PropertyDetails {
  name: string;
  shortName: string;
  tagline: string;
  subheadline: string;
  coordinates: {
    lat: number;
    lng: number;
    display: string;
  };
  elevation: string;
  permitNumber: string;
  address: {
    complex: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    owners: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    facebook: string;
    instagram: string;
    sisterProperty: string;
  };
  ownerRez: {
    propertyId: string;
    hostedSiteId: string;
    orpId: string;
    bookingWidgetId: string;
    calendarWidgetId: string;
    reviewsWidgetId: string;
  };
  specs: {
    sqft: number;
    type: string;
    bedrooms: string;
    bathrooms: string;
    maxGuests: number;
    bedsSummary: string;
    parkingSpaces: number;
    wifiSpeed: string;
    checkIn: string;
    checkOut: string;
    baseRate: string;
  };
  distances: Array<{
    destination: string;
    distance: string;
    type: string;
    description: string;
  }>;
}

export const property: PropertyDetails = {
  name: "Mammoth Conestoga 112",
  shortName: "Conestoga 112",
  tagline: "High-Elevation Sanctuary.",
  subheadline: "A refined mountain residence engineered for the cadence of the Eastern Sierra—uniting alpine utility with architectural calm.",
  coordinates: {
    lat: 37.643557,
    lng: -118.9935881,
    display: "37.6435° N, 118.9936° W",
  },
  elevation: "8,050 FT",
  permitNumber: "TOML-CPAN-11083",
  address: {
    complex: "Conestoga Complex",
    unit: "Unit 112",
    city: "Mammoth Lakes",
    state: "CA",
    zip: "93546",
    country: "USA",
  },
  contact: {
    owners: "Roger & Stephanie",
    email: "rogandsteph@mammothconestoga112.com",
    phone: "9493078014",
    phoneFormatted: "(949) 307-8014",
    facebook: "https://www.facebook.com/MammothConestoga112",
    instagram: "https://www.instagram.com/mammoth_conestoga_112",
    sisterProperty: "https://www.facebook.com/mammothlakestyrol103",
  },
  ownerRez: {
    propertyId: "78054174bd764251bb0789060dd3a7d7",
    hostedSiteId: "573929012",
    orpId: "ORP356645",
    bookingWidgetId: "eae07243091e4f43b3cce6fe084e83a9",
    calendarWidgetId: "104e34b1a59347728a6698634dfb2ee8",
    reviewsWidgetId: "14de608b5f9b45a59cc711820f5f8cca",
  },
  specs: {
    sqft: 612,
    type: "End-Unit Studio + Loft",
    bedrooms: "1 Loft Bedroom",
    bathrooms: "1.5 Baths (1 Full Upstairs, 1 Half Downstairs)",
    maxGuests: 4,
    bedsSummary: "1 Queen Bed (Loft) + 1 Queen Memory Foam Sleeper (Living)",
    parkingSpaces: 2,
    wifiSpeed: "250+ Mbps High-Speed Fiber",
    checkIn: "4:00 PM",
    checkOut: "10:00 AM",
    baseRate: "$125 – $300/night",
  },
  distances: [
    {
      destination: "Canyon Lodge",
      distance: "0.5 MILES",
      type: "Ski Lifts & Snowboard Basin",
      description: "Quick 2-minute drive or short shuttle hop to primary winter lift access and ski school.",
    },
    {
      destination: "The Village & Gondola",
      distance: "< 1.0 MILE",
      type: "Dining, Shopping & Gondola",
      description: "Direct mountain gondola access, craft breweries, alpine gear shops, and fine dining.",
    },
    {
      destination: "Eagle Lodge",
      distance: "1.0 MILE",
      type: "South Mountain Access",
      description: "Uncrowded high-speed six-pack chairlift access and easy mountain parking.",
    },
    {
      destination: "Free Mountain Shuttle Stop",
      distance: "100 YARDS",
      type: "Transit & Mountain Connection",
      description: "Steps from the complex front entrance for effortless car-free mountain transit.",
    },
    {
      destination: "Twin Lakes & Mammoth Lakes Basin",
      distance: "2.5 MILES",
      type: "High-Alpine Trails & Fishing",
      description: "Pristine alpine lakes, hiking trailheads into the John Muir Wilderness, and kayak rentals.",
    },
    {
      destination: "Mammoth Rock Trailhead",
      distance: "1.8 MILES",
      type: "Hiking & Mountain Biking",
      description: "Iconic singletrack under the dramatic limestone face of Mammoth Rock.",
    },
  ],
};
