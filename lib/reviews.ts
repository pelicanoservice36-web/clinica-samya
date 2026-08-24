import googleReviewsData from "@/data/google-reviews.json";

export type GoogleReview = {
  name: string;
  reviewerMeta: string;
  relativeTime: string;
  isNew: boolean;
  text: string;
  ownerReply: string | null;
};

// Extraído do Google Maps em 2026-08-24 via scripts/scrape-google-reviews.mjs
// (visualização pública sem login — ver data/google-reviews.json para a nota
// completa sobre a origem e as limitações dessa coleta).
export const googleRating = googleReviewsData.rating;
export const googleReviewCount = googleReviewsData.reviewCount;
export const googleReviews: GoogleReview[] = googleReviewsData.reviews;
