import reviews from "@/data/reviews";
import React, { useEffect, useState } from "react";
import AddReview from "../components/common/AddReview";
import ReviewCard from "../components/common/ReviewCard";
import SlidingPopupWrapper from "../components/common/SlidingPopupWrapper";
import { fontFamilies, fontWeights } from '@/styles/fonts';

interface Review {
    name: string;
    rating: number;
    comment: string;
    date: string;
    likes: number;
    isLiked?: boolean;
}

const Reviews: React.FC = () => {
    const [reviewsData, setReviewsData] = useState<Review[]>([]);
    const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

    useEffect(() => {
        setReviewsData(reviews);
    }, []);

    const handleLike = (index: number) => {
        setReviewsData((prevReviews) =>
            prevReviews.map((review, i) => {
                if (i === index) {
                    return {
                        ...review,
                        likes: review.isLiked
                            ? review.likes - 1
                            : review.likes + 1,
                        isLiked: !review.isLiked,
                    };
                }
                return review;
            })
        );
    };

    const handleRatingChange = (index: number, newRating: number) => {
        setReviewsData((prevReviews) =>
            prevReviews.map((review, i) =>
                i === index ? { ...review, rating: newRating } : review
            )
        );
    };

    const handleAddReview = (newReview: {
        name: string;
        rating: number;
        comment: string;
    }) => {
        const review: Review = {
            ...newReview,
            date: new Date().toISOString(),
            likes: 0,
            isLiked: false,
        };
        setReviewsData([review, ...reviewsData]);
        setIsAddReviewOpen(false);
    };

    return (
        <div className="relative min-h-screen">
            {/* Main container with consistent max-width and padding */}
            <div className="container mx-auto px-4 py-4 pt-20 md:pt-8 lg:pt-4 pb-24 
                lg:max-w-7xl xl:max-w-[1400px]">
                {/* Title with display font */}
                <h1 className="text-2xl md:text-3xl mb-6"
                    style={{ 
                        fontFamily: fontFamilies.heading,
                    }}>
                    Reviews
                </h1>

                {/* Review content with primary font */}
                <div className="space-y-4 max-w-4xl mx-auto"
                    style={{ fontFamily: fontFamilies.primary }}>
                    {reviewsData.map((review, index) => (
                        <div key={index}>
                            <ReviewCard
                                name={review.name}
                                rating={review.rating}
                                comment={review.comment}
                                date={review.date}
                                likes={review.likes}
                                onClickLike={() => handleLike(index)}
                                onRatingChange={(newRating) =>
                                    handleRatingChange(index, newRating)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Add Button - positioned consistently */}
            <button
                onClick={() => setIsAddReviewOpen(true)}
                className="fixed bottom-30 right-6 w-13 h-13 bg-[var(--bg-color-dark)] 
                    rounded-full shadow-lg flex items-center justify-center 
                    hover:bg-opacity-90 transition-colors duration-200 z-50"
                aria-label="Add Review"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </button>

            {/* Sliding Popup */}
            <SlidingPopupWrapper
                isOpen={isAddReviewOpen}
                onClose={() => setIsAddReviewOpen(false)}
                title="Write a Review"
            >
                <AddReview onSubmit={handleAddReview} />
            </SlidingPopupWrapper>
        </div>
    );
};

export default Reviews;
