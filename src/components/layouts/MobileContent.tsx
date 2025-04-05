import background1 from "@/assets/images/background-2.jpeg";
import background2 from "@/assets/images/background-3.jpeg";
import background from "@/assets/images/background.jpg";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import FilterButton from "../features/FilterButton";
import FoodCard from "../features/FoodCard";

const MobileContent: React.FC = () => {
    // State for tracking current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const filters = [
        "Appetizers",
        "Salads",
        "Mexican Dinners",
        "Fajitas",
        "Steaks",
        "Tapatios",
        "House Specialties",
        "Burritos",
        "American Classics",
        "Burgers",
        "Seniors & Kids menu",
        "Side Orders",
        "Beverages",
        "Desserts",
    ];

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
    };

    // Array of background images
    const images = [background, background1, background2];

    // Auto-advance images every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="relative bg-cover bg-center overflow-hidden bg-[var(--bg-color-black-animation)]">
                {/* Dark overlay */}
                <div className="absolute inset-0 z-10" />

                {/* Background image carousel */}
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full bg-black/60"
                    >
                        <img
                            src={images[currentImageIndex]}
                            className="w-full h-full object-cover"
                            alt="Background"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark overlay - moved after the AnimatePresence */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Slide indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentImageIndex === index
                                    ? "w-8 bg-white"
                                    : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        />
                    ))}
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                        Experience the Rich Flavors of
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                        Hidalgo's Restaurant
                    </p>
                    <button className="btn-primary text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 mt-3 sm:mt-4 md:mt-5 rounded-md">
                        <span className="text-base sm:text-lg md:text-xl">Order Now </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 inline-block ml-2 animate-moveRight"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Filters section */}
            <div className="p-4 relative">
                <p className="text-xl sm:text-2xl text-black font-bold mb-4">
                    Every Bite is Fresh & Flavorful!
                </p>
                {/* Gradient overlays to indicate more content */}
                <div className="absolute right-4 top-[2rem] bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute left-2 top-[3rem] bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                
                {/* Filters container */}
                <div className="relative">
                    <div className="ml-1 p-1 overflow-x-auto whitespace-nowrap mt-4 scrollbar-hide 
                        scroll-smooth snap-x snap-mandatory flex">
                        {filters.map((filter, index) => (
                            <div 
                                key={filter} 
                                className={`snap-start ${
                                    index !== filters.length - 1 ? 'mr-5' : 'mr-2'
                                }`}
                            >
                                <FilterButton
                                    label={filter}
                                    value={selectedFilter}
                                    onClick={() => handleFilterClick(filter)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Items section - Added bottom padding */}
            <div className="p-4 pb-20 md:pb-8 lg:pb-4 flex flex-wrap gap-4">
                <FoodCard 
                    image={background} 
                    name="Tacos" 
                    price={10.99} 
                    count={0} 
                    onIncrement={() => {}} 
                    onDecrement={() => {}}
                />
                <FoodCard 
                    image={background} 
                    name="Tacos" 
                    price={10.99} 
                    count={0} 
                    onIncrement={() => {}} 
                    onDecrement={() => {}}
                />
                <FoodCard 
                    image={background} 
                    name="Tacos" 
                    price={10.99} 
                    count={0} 
                    onIncrement={() => {}} 
                    onDecrement={() => {}}
                />
                <FoodCard 
                    image={background} 
                    name="Tacos" 
                    price={10.99} 
                    count={0} 
                    onIncrement={() => {}} 
                    onDecrement={() => {}}
                />
                <FoodCard 
                    image={background} 
                    name="Tacos" 
                    price={10.99} 
                    count={0} 
                    onIncrement={() => {}} 
                    onDecrement={() => {}}
                />
            </div>
        </>
    );
};

export default MobileContent;
