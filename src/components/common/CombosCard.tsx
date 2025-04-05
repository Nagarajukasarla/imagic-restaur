import React from "react";
import { motion } from "framer-motion";
import { fontFamilies } from "@/styles/fonts";

// Import your combo images
import combo1 from "@/assets/images/food-image-1.jpg";
import combo2 from "@/assets/images/food-image-2.jpg";
import combo3 from "@/assets/images/food-image-3.jpg";

const CombosCard: React.FC = () => {
    return (
        <div className="flex-1 px-2 sm:px-4 lg:px-6 md:border-b-0 lg:border-b border-white/40"> {/* Added border-b and removed it on lg screens */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="p-4 sm:p-6 lg:p-6" /* Reduced padding */
            >
                <h2
                    className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-3 sm:mb-4 text-center" /* Adjusted font sizes */
                    style={{ fontFamily: fontFamilies.display }}
                >
                    Featured Combo
                </h2>
                {/* Circular Images Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-4"> {/* Reduced gaps */}
                    {[combo1, combo2, combo3].map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[85px] lg:h-[85px] rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={image}
                                    alt={`Combo item ${index + 1}`}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-white/80 text-center mt-3 sm:mt-4 lg:mt-6 max-w-3xl mx-auto"> {/* Adjusted font sizes and margins */}
                    Mexican style street tacos. Soft corn tortillas with grilled
                    chicken breast and chorizo. Served with onions, cilantro,
                    Mexican rice, and refried beans.
                </p>
            </motion.div>
        </div>
    );
};

export default CombosCard;
