import React, { useEffect, useState } from "react";
import { fontFamilies } from "@/styles/fonts";

interface ReviewCardProps {
    name: string;
    rating: number;
    comment: string;
    date: string;
    likes: number;
    onClickLike: () => void;
    onRatingChange: (newRating: number) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    name,
    rating,
    comment,
    date,
    likes,
    onClickLike,
    onRatingChange,
}) => {
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const [isLiked, setIsLiked] = useState(false);
    const [currentScreenSize, setCurrentScreenSize] = useState<number>(
        window.innerWidth
    );
    const [starIcon, setStarIcon] = useState<string>("");
    const [heartIcon, setHeartIcon] = useState<string>("");
    const [userIcon, setUserIcon] = useState<string>("");

    // Check if screen is large
    const isLargeScreen = currentScreenSize >= 768;
    const isMobileScreen = currentScreenSize < 768;

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            setCurrentScreenSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Load appropriate icons based on screen size
        const loadIcons = async () => {
            try {
                if (currentScreenSize < 768) {
                    const starModule = await import("@/assets/icons/star.svg");
                    const heartModule = await import(
                        "@/assets/icons/heart.svg"
                    );
                    const userModule = await import("@/assets/icons/user.svg");
                    setStarIcon(starModule.default);
                    setHeartIcon(heartModule.default);
                    setUserIcon(userModule.default);
                } else {
                    const starModule = await import(
                        "@/assets/icons/star-gradient.png"
                    );
                    const heartModule = await import(
                        "@/assets/icons/heart-gradient.png"
                    );
                    const userModule = await import(
                        "@/assets/icons/user-gradient.png"
                    );
                    setStarIcon(starModule.default);
                    setHeartIcon(heartModule.default);
                    setUserIcon(userModule.default);
                }
            } catch (error) {
                console.error("Error loading icons:", error);
            }
        };

        loadIcons();
    }, [currentScreenSize]);

    const handleLikeClick = (e: React.MouseEvent) => {
        if (isLargeScreen) {
            e.preventDefault();
            return;
        }
        setIsLiked(!isLiked);
        onClickLike();
    };

    const handleStarClick = (e: React.MouseEvent, index: number) => {
        if (isLargeScreen) {
            e.preventDefault();
            return;
        }
        onRatingChange(index + 1);
    };

    const handleStarHover = (e: React.MouseEvent, index: number | null) => {
        if (isLargeScreen) {
            e.preventDefault();
            return;
        }
        setHoverRating(index);
    };

    // Function to determine star state
    const getStarState = (index: number) => {
        if (hoverRating !== null) {
            // During hover, show active but not filled
            return {
                isActive: index < hoverRating,
                isFilled: index < rating,
            };
        }
        // When not hovering, show filled based on rating
        return {
            isActive: index < rating,
            isFilled: index < rating,
        };
    };

    const convertToDays = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
        const diff = now.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
        if (years > 0) {
            return `${years} year${years > 1 ? "s" : ""} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? "s" : ""} ago`;
        } else {
            return `${days} day${days > 1 ? "s" : ""} ago`;
        }
    };

    return (
        <div
            className={`lg:flex lg:flex-col lg:align-center lg:justify-center w-full lg:w-[400px] lg:h-[315px] xl:w-[350px] lg:bg-[var(--lg-review-card-bg)] 
            bg-white lg:rounded-none rounded-lg
            shadow-md md:shadow-[0_0_15px_rgba(255,255,255,0.1)] lg:shadow-[0_0_15px_rgba(255,255,255,0.1)]
            border border-b-[var(--filter-button-border)] lg:border-none xl:px-5
            ${isLargeScreen ? "lg:relative lg:z-10" : "hover:shadow-lg transition-shadow duration-300"}`}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-0 lg:border-none md:border-none border-b border-gray-200">
                {/* User Avatar and Name */}
                <div className="flex items-center px-2">
                    <img
                        src={userIcon}
                        alt="User Avatar"
                        className="w-12 h-12 lg:w-8 lg:h-7.5 rounded-full mr-2"
                    />
                    <h3
                        className="text-lg lg:text-white md:text-white"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        {name}
                    </h3>
                </div>

                {/* Date */}
                <p
                    className="text-[var(--review-card-date-fg)] mr-5  lg:text-white md:text-white"
                    style={{ fontFamily: fontFamilies.primary }}
                >
                    {convertToDays(date)}
                </p>
            </div>

            {/** Comment area */}
            <div className="p-4">
                <p
                    className="text-gray-700 lg:text-white/80 mb-2"
                    style={{ fontFamily: fontFamilies.display }}
                >
                    {comment}
                </p>
            </div>

            {/** Rating stars and Like button in same row */}
            <div className="flex items-center justify-between px-4 pb-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => {
                        const { isActive, isFilled } = getStarState(index);
                        return (
                            <div
                                key={index}
                                className={`w-6 h-6 ${isLargeScreen ? "cursor-default" : "cursor-pointer"} 
                                transition-all duration-200 ${isActive ? "opacity-100" : "opacity-30"}`}
                                onClick={(e) => handleStarClick(e, index)}
                                onMouseEnter={
                                    isLargeScreen
                                        ? undefined
                                        : (e) => handleStarHover(e, index + 1)
                                }
                                onMouseLeave={
                                    isLargeScreen
                                        ? undefined
                                        : (e) => handleStarHover(e, null)
                                }
                                style={{
                                    pointerEvents: isLargeScreen
                                        ? "none"
                                        : "auto",
                                }}
                            >
                                <img
                                    src={starIcon}
                                    alt={`Star ${index + 1}`}
                                    className="w-full h-full"
                                    style={{
                                        filter: isFilled
                                            ? "none"
                                            : "grayscale(100%)",
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Like button */}
                <button
                    onClick={handleLikeClick}
                    className={`flex items-center gap-2 text-gray-600 
                    ${isLargeScreen ? "" : "hover:text-gray-800 transition-colors duration-200"}`}
                    disabled={isLargeScreen}
                    style={{ pointerEvents: isLargeScreen ? "none" : "auto" }}
                >
                    <img
                        src={heartIcon}
                        alt="Like"
                        style={{
                            filter: isLargeScreen
                                ? "none"
                                : isMobileScreen && isLiked
                                  ? "none"
                                  : "grayscale(100%)",
                            opacity: isLargeScreen
                                ? 1
                                : isMobileScreen && isLiked
                                  ? 1
                                  : 0.4,
                            transform: `scale(${!isLargeScreen && isLiked ? 1.1 : 1})`,
                            pointerEvents: "none",
                        }}
                        className="w-6 h-6 transition-all duration-200"
                    />
                    <span style={{ fontFamily: fontFamilies.primary }}>
                        {likes}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
