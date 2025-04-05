import React, { useState } from "react";
import userIcon from "@/assets/icons/user.svg";
import starIcon from "@/assets/icons/star.svg";
import { fontFamilies } from "@/styles/fonts";

interface AddReviewProps {
    onSubmit: (review: {
        name: string;
        rating: number;
        comment: string;
    }) => void;
}

const AddReview: React.FC<AddReviewProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim() || rating === 0) {
            return; // Basic validation
        }
        onSubmit({
            name,
            rating,
            comment,
        });
        // Reset form
        setName("");
        setRating(0);
        setComment("");
    };

    // Function to determine if a star should be active
    const isStarActive = (index: number) => {
        if (hoverRating !== null) {
            return index < hoverRating;
        }
        return index < rating;
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg">
            {/* Header */}
            <div className="flex items-center py-4">
                <img
                    src={userIcon}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-2"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:border-gray-600 focus:outline-none px-1 py-1 w-full max-w-[200px]"
                    style={{ fontFamily: fontFamilies.display }}
                />
            </div>

            {/* Comment area */}
            <div className="px-4 pb-4">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your review..."
                    required
                    className="w-full h-24 p-2 border-b border-gray-300 focus:border-gray-600 focus:outline-none resize-none bg-transparent"
                    style={{ fontFamily: fontFamilies.display }}
                />
            </div>

            {/** Rating stars and Submit button */}
            <div className="flex items-center justify-between px-4 pb-14">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <img
                            key={index}
                            src={starIcon}
                            alt={`Star ${index + 1}`}
                            className={`w-6 h-6 cursor-pointer transition-opacity duration-200 ${
                                isStarActive(index)
                                    ? "opacity-100"
                                    : "opacity-30"
                            }`}
                            onClick={() => setRating(index + 1)}
                            onMouseEnter={() => setHoverRating(index + 1)}
                            onMouseLeave={() => setHoverRating(null)}
                        />
                    ))}
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-[var(--bg-color-dark)] text-white px-6 py-2 rounded-md hover:bg-opacity-80 hover:shadow-md cursor-pointer transition-all duration-200 ease-in-out"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddReview;
