import { FoodItem } from "@/types";
import { useState, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";
import { fontFamilies } from "@/styles/fonts";

interface ImageChangeOnHoverContainerProps {
    items: FoodItem[];
}

const ImageChangeOnHoverContainer: React.FC<ImageChangeOnHoverContainerProps> = ({ items }) => {
    const [activeImage, setActiveImage] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const topEightItems = items.slice(0, 8);

    // Add useEffect to set initial image when items are loaded
    useEffect(() => {
        if (items.length > 0) {
            setActiveImage(items[0]?.image??"");
        }
    }, [items]);

    const handleMouseEnter = (index: number, image: string) => {
        setHoveredIndex(index);
        setActiveImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setActiveImage(items[0]?.image || '');
    };

    return (
        <div className="flex flex-col-reverse md:flex-row w-full h-full gap-8 bg-black md:p-8">
            {/* Names List Container */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
                {topEightItems.map((item, index) => (
                    <div key={index} className="relative md:pl-8 lg:pl-24">
                        <motion.div
                            className="relative inline-block cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index, item?.image??"")}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Star Icon */}
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10.17"
                                height="10.35"
                                className="absolute top-1/2 -translate-y-1/2 left-0"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{
                                    x: hoveredIndex === index ? -20 : 20,
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    fill="#ca9d75"
                                    d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                />
                            </motion.svg>

                            {/* Food Item Name */}
                            <motion.p
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 transition-colors duration-300"
                                style={{ fontFamily: fontFamilies.display }}
                                animate={{
                                    x: hoveredIndex === index ? 10 : 0,
                                    color: hoveredIndex === index ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.8)"
                                }}
                            >
                                {item.name}
                            </motion.p>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Image Container */}
            <div className="md:w-1/2 h-[300px] md:h-[600px] relative overflow-hidden rounded-xl">
                <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt="Selected food item"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};

export default ImageChangeOnHoverContainer;
