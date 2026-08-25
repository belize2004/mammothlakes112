export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  location?: string;
  comment: string;
  source: 'OwnerRez Verified' | 'Airbnb' | 'VRBO';
}

export const reviewsSummary = {
  averageRating: 4.91,
  totalReviews: 257,
  stars: 5,
  recommendationPercentage: 99,
};

export const featuredReviews: ReviewItem[] = [
  {
    id: "r1",
    author: "Mike N.",
    date: "June 2024",
    rating: 5,
    location: "Southern California",
    comment: "This condo is absolute perfection for a Mammoth getaway. Having the parking right at the front door made packing and unpacking skis with our dog so easy. The wood stove puts out incredible heat, and the remodeled bathroom upstairs is top notch. Roger & Stephanie are phenomenal hosts!",
    source: "OwnerRez Verified",
  },
  {
    id: "r2",
    author: "Keith A.",
    date: "April 2024",
    rating: 5,
    location: "Bay Area, CA",
    comment: "Best pet-friendly stay we have ever had in Mammoth. The dog setup with the paw cleaner and towels was such a thoughtful touch. The kitchen had every tool we needed to cook meals, and the loft bed was super comfortable with the topper. We will definitely be back next season!",
    source: "OwnerRez Verified",
  },
  {
    id: "r3",
    author: "Sarah & David L.",
    date: "January 2024",
    rating: 5,
    location: "San Diego, CA",
    comment: "We loved staying at Conestoga 112! It's less than 2 minutes to Canyon Lodge which meant we were on first chair every single morning. Coming back to relax in the hot tub and sit in front of the wood fire was heaven. Truly 5 stars in every category.",
    source: "OwnerRez Verified",
  },
  {
    id: "r4",
    author: "Jennifer M.",
    date: "December 2023",
    rating: 5,
    location: "Orange County, CA",
    comment: "The vaulted ceilings make the condo feel so open and bright. High-speed internet was rock solid for my remote workday on Friday before hitting the slopes for the weekend. The kitchen coffee setup and peek view of Lincoln Mountain was wonderful.",
    source: "OwnerRez Verified",
  },
];
