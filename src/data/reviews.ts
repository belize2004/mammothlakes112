export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  location?: string;
  comment: string;
  source: 'OwnerRez Verified' | 'Airbnb' | 'VRBO';
  category: 'ski' | 'dog' | 'comfort' | 'all';
  highlightBadge?: string;
}

export const reviewsSummary = {
  averageRating: 4.91,
  totalReviews: 257,
  stars: 5,
  recommendationPercentage: 99,
  categories: [
    { name: "Cleanliness", score: "5.0" },
    { name: "Location & Shuttle", score: "5.0" },
    { name: "Wood Stove Warmth", score: "5.0" },
    { name: "Host Communication", score: "5.0" },
    { name: "Dog Amenities", score: "4.9" },
    { name: "Kitchen & Cooking", score: "4.9" },
  ]
};

export const featuredReviews: ReviewItem[] = [
  {
    id: "r1",
    author: "Mike N.",
    date: "June 2024",
    rating: 5,
    location: "Southern California",
    category: "comfort",
    highlightBadge: "Wood Stove & Remodeled Bath",
    comment: "This condo is absolute perfection for a Mammoth getaway. Having the parking right at the front door made packing and unpacking skis with our dog so easy. The wood stove puts out incredible heat, and the remodeled bathroom upstairs is top notch. Roger & Stephanie are phenomenal hosts!",
    source: "OwnerRez Verified",
  },
  {
    id: "r2",
    author: "Keith A.",
    date: "April 2024",
    rating: 5,
    location: "Bay Area, CA",
    category: "dog",
    highlightBadge: "Best Pet-Friendly Stay",
    comment: "Best pet-friendly stay we have ever had in Mammoth. The dog setup with the paw cleaner and towels was such a thoughtful touch. The kitchen had every tool we needed to cook meals, and the loft bed was super comfortable with the topper. We will definitely be back next season!",
    source: "OwnerRez Verified",
  },
  {
    id: "r3",
    author: "Sarah & David L.",
    date: "January 2024",
    rating: 5,
    location: "San Diego, CA",
    category: "ski",
    highlightBadge: "First Chair at Canyon Lodge",
    comment: "We loved staying at Conestoga 112! It's less than 2 minutes to Canyon Lodge which meant we were on first chair every single morning. Coming back to relax in the hot tub and sit in front of the wood fire was heaven. Truly 5 stars in every category.",
    source: "OwnerRez Verified",
  },
  {
    id: "r4",
    author: "Jennifer M.",
    date: "December 2023",
    rating: 5,
    location: "Orange County, CA",
    category: "comfort",
    highlightBadge: "Remote Work & Mountain View",
    comment: "The vaulted ceilings make the condo feel so open and bright. High-speed internet was rock solid for my remote workday on Friday before hitting the slopes for the weekend. The kitchen coffee setup and peek view of Lincoln Mountain was wonderful.",
    source: "OwnerRez Verified",
  },
  {
    id: "r5",
    author: "Robert & Elena K.",
    date: "September 2023",
    rating: 5,
    location: "Los Angeles, CA",
    category: "comfort",
    highlightBadge: "Gourmet Kitchen",
    comment: "The remodeled kitchen is fully stocked with quality pots, pans, and coffee makers. We cooked multiple dinners after hiking in the Mammoth Lakes basin. Having 2 reserved parking spaces right in front of the door is a huge convenience.",
    source: "OwnerRez Verified",
  },
  {
    id: "r6",
    author: "Brian T.",
    date: "March 2023",
    rating: 5,
    location: "Reno, NV",
    category: "ski",
    highlightBadge: "Great Location",
    comment: "Prime spot between Canyon Lodge and The Village. The free shuttle is right down the driveway, but we ended up just driving the 2 minutes to Canyon Lodge most days. The wood fireplace kept the whole place toasty warm all night.",
    source: "OwnerRez Verified",
  },
];
