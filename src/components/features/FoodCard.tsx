import React from 'react';
import { fontFamilies, fontWeights } from '@/styles/fonts';

interface FoodCardProps {
    image: string;
    name: string;
    price: number;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
    image,
    name,
    price,
    count,
    onIncrement,
    onDecrement
}) => {
    return (
        // Card wrapper with responsive widths and max-width constraint
        <div className="w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] max-w-[280px]
            bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 
            hover:shadow-lg active:scale-[0.98]">
            
            {/* Card Container - Maintains aspect ratio and content alignment */}
            <div className="flex flex-col h-full">
                {/* Image Container - Consistent aspect ratio across screen sizes */}
                <div className="h-40 md:h-44 lg:h-48 w-full">
                    <img 
                        src={image} 
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Container - Proper spacing for content */}
                <div className="flex flex-col p-3 md:p-4">
                    {/* Name and Price Section */}
                    <div className="mb-3">
                        <h3 className="text-base md:text-lg font-semibold mb-1 line-clamp-2"
                            style={{ fontFamily: fontFamilies.heading, fontWeight: fontWeights.semibold }}>
                            {name}
                        </h3>
                        <p className="text-green-600 font-bold text-sm md:text-base"
                            style={{ fontFamily: fontFamilies.primary, fontWeight: fontWeights.bold }}>
                            ${price.toFixed(2)}
                        </p>
                    </div>

                    {/* Counter Controls - Aligned to bottom */}
                    <div className="flex items-center justify-end gap-2 md:gap-3 mt-auto">
                        <button 
                            onClick={onDecrement}
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center
                                transition-colors duration-200 hover:bg-gray-300 active:bg-gray-400
                                disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={count === 0}
                        >
                            <span className="text-gray-600 text-lg md:text-xl">-</span>
                        </button>

                        <span className="w-7 md:w-8 text-center text-base md:text-lg font-semibold">
                            {count}
                        </span>

                        <button 
                            onClick={onIncrement}
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center
                                transition-colors duration-200 hover:bg-green-600 active:bg-green-700
                                text-white"
                        >
                            <span className="text-lg md:text-xl">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
