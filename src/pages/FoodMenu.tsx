import React, { useState } from "react";
import FilterButton from "../components/features/FilterButton";
import FoodCard from "../components/features/FoodCard";
import background from "@/assets/images/background.jpg";
import { fontFamilies, fontWeights } from '@/styles/fonts';

const FoodMenu: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const filters = [
        "Combos",
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

    return (
        // Main container with responsive padding and max-width
        <div className="mx-auto px-1 py-4 pt-20 pb-20 md:pt-8 lg:pt-4 lg:max-w-7xl xl:max-w-[1400px]">
            {/* Filters section with consistent padding */}
            <div className="p-4 relative">
                <p className="text-xl sm:text-2xl text-black mb-4"
                    style={{ 
                        fontFamily: fontFamilies.display,
                        fontWeight: fontWeights.bold 
                    }}>
                    Every Bite is Fresh & Flavorful!
                </p>
                
                {/* Gradient overlays for scroll indication */}
                <div className="absolute right-4 top-[2rem] bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute left-2 top-[3rem] bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Filters container with horizontal scroll */}
                <div className="relative"
                    style={{ fontFamily: fontFamilies.primary }}>
                    <div className="ml-1 p-1 overflow-x-auto whitespace-nowrap mt-2 mb-4 scrollbar-hide 
                        scroll-smooth snap-x snap-mandatory flex">
                        {filters.map((filter, index) => (
                            <div
                                key={filter}
                                className={`snap-start ${index !== filters.length - 1 ? "mr-5" : "mr-2"}`}
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

            {/* Items section with centered content and proper spacing */}
            <div className="p-4 flex flex-wrap justify-center gap-4">
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
        </div>
    );
};

export default FoodMenu;
