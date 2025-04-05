import videoCoverImage from "@/assets/images/background-2.jpeg";
import image1 from "@/assets/images/food-image-1.jpg";
import image2 from "@/assets/images/food-image-2.jpg";
import BottomHeader from "@/components/layouts/BottomHeader";
import { fontFamilies } from "@/styles/fonts";
import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {
    return (
        <div className="w-full bg-black">
            <div className="sticky top-[40px] z-50">
                <BottomHeader isMenu={true} />
            </div>

            {/* Main content with proper spacing */}
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
                    {/* Left Image - Only visible on large screens */}
                    <div className="hidden lg:block w-full lg:w-1/4">
                        <div className="relative w-full h-[400px]">
                            <img
                                src={image1}
                                alt="Restaurant Image 1"
                                className="w-full h-full object-cover rounded-full"
                            />
                            <div className="absolute inset-0 bg-black/40" />{" "}
                        </div>
                    </div>

                    {/* Center Content - Adjusts position based on screen size */}
                    <div className="w-full md:w-1/2 lg:w-2/4 md:pl-8 lg:px-8 order-1 md:order-1 lg:order-2">
                        {/* Title Section */}
                        <div className="text-center md:text-left lg:text-center mb-8">
                            <h1
                                className="text-4xl md:text-5xl text-white mb-6 uppercase"
                                style={{ fontFamily: fontFamilies.display }}
                            >
                                Our Story
                            </h1>
                            {/* Decorative stars */}
                            <div className="flex justify-center md:justify-start lg:justify-center items-center gap-4 mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10.17"
                                    height="10.35"
                                >
                                    <path
                                        fill="#ca9d75"
                                        d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10.17"
                                    height="10.35"
                                >
                                    <path
                                        fill="#ca9d75"
                                        d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10.17"
                                    height="10.35"
                                >
                                    <path
                                        fill="#ca9d75"
                                        d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                    />
                                </svg>
                            </div>
                            <p
                                className="text-white/90 text-xl leading-relaxed text-center md:text-left lg:text-center mb-6"
                                style={{ fontFamily: fontFamilies.primary }}
                            >
                                Welcome to Hidalgo's Restaurant, where culinary
                                passion meets a warm and inviting atmosphere!
                            </p>
                            <p
                                className="text-white/90 text-xl leading-relaxed text-center md:text-left lg:text-center"
                                style={{ fontFamily: fontFamilies.primary }}
                            >
                                Founded in 2010 by Hidalgo's Restaurant, our
                                restaurant is dedicated to providing an
                                unforgettable dining experience that celebrates
                                the rich flavors and diverse cuisines of San
                                Angelo.
                            </p>
                        </div>
                    </div>

                    {/* Right Image - Adjusts position and style based on screen size */}
                    <div className="w-full md:w-1/2 lg:w-1/4 order-2 md:order-2 lg:order-3">
                        <div className="relative w-full h-[400px]">
                            <img
                                src={image2}
                                alt="Restaurant Image 2"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="relative cursor-pointer">
                <img
                    className="w-full h-200 object-cover"
                    src={videoCoverImage}
                    alt="Video cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/30">
                        <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-black ml-2"></div>
                    </div>
                </div>
            </div>

            {/* Team of Experts Section */}
            <div className="py-20 px-4">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase"
                            style={{ fontFamily: fontFamilies.display }}
                        >
                            Team of Experts
                        </h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: fontFamilies.primary }}>
                            Quasi dolores nisi officiis cupiditate quo oluptas nam voluptatem
                        </p>
                    </div>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Team Member 1 */}
                        <div className="team-member">
                            <div className="relative overflow-hidden group">
                                <img
                                    src={image1}
                                    alt="Gracie Howard"
                                    className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                            </div>
                            <div className="text-center mt-6">
                                <h3 
                                    className="text-2xl text-white mb-2"
                                    style={{ fontFamily: fontFamilies.display }}
                                >
                                    Gracie Howard
                                </h3>
                                <p className="text-[#ca9d75]" style={{ fontFamily: fontFamilies.primary }}>
                                    Expediter
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="team-member">
                            <div className="relative overflow-hidden group">
                                <img
                                    src={image2}
                                    alt="Phoebe Bruce"
                                    className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                            </div>
                            <div className="text-center mt-6">
                                <h3 
                                    className="text-2xl text-white mb-2"
                                    style={{ fontFamily: fontFamilies.display }}
                                >
                                    Phoebe Bruce
                                </h3>
                                <p className="text-[#ca9d75]" style={{ fontFamily: fontFamilies.primary }}>
                                    Butcher Chef
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="team-member">
                            <div className="relative overflow-hidden group">
                                <img
                                    src={image1}
                                    alt="Executive Chef"
                                    className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                            </div>
                            <div className="text-center mt-6">
                                <h3 
                                    className="text-2xl text-white mb-2"
                                    style={{ fontFamily: fontFamilies.display }}
                                >
                                    John Smith
                                </h3>
                                <p className="text-[#ca9d75]" style={{ fontFamily: fontFamilies.primary }}>
                                    Executive Chef
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visit US Section */}
            <div className="bg-black py-10 border border-white/90">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-3xl lg:text-4xl text-white mb-4"
                            style={{ fontFamily: fontFamilies.medium }}
                        >
                            VISIT US NOW
                        </h2>
                        <div className="flex justify-center items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10.17"
                                height="10.35"
                            >
                                <path
                                    fill="#ca9d75"
                                    d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10.17"
                                height="10.35"
                            >
                                <path
                                    fill="#ca9d75"
                                    d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10.17"
                                height="10.35"
                            >
                                <path
                                    fill="#ca9d75"
                                    d="M6.3 10.35H3.87l.63-4.41-3.06 3.24L0 7.29l3.69-2.16L0 3.06l1.53-1.89L4.5 4.32 3.87 0H6.3l-.63 4.32 3.06-3.15 1.44 1.89-3.6 2.07 3.6 2.16-1.53 1.89-2.97-3.24Z"
                                />
                            </svg>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-5 text-center text-white/80 text-md lg:text-xl"
                            style={{ fontFamily: fontFamilies.primary }}
                        >
                            2020 S Bryant Blvd,
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-white/80 mb-16 text-md lg:text-xl"
                            style={{ fontFamily: fontFamilies.primary }}
                        >
                            San Angelo, TX 76903
                        </motion.p>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="flex flex-col lg:flex-row w-full bg-black overflow-hidden px-8 lg:px-16 gap-8 lg:gap-16">
                    {/* Column 1 */}
                    <div className="flex flex-col justify-start flex-1">
                        <h2 className="text-white/90 text-2xl lg:text-3xl font-semibold mb-4 uppercase">
                            Hidalgo's Restaurant
                        </h2>
                        <p className="text-white/80 uppercase mb-2">
                            2020 S Bryant Blvd,
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            San Angelo, TX 76903
                        </p>
                        <a
                            href="#"
                            className="text-[#ca9d75] hover:text-[#e5b285] transition-colors duration-300 uppercase cursor-pointer"
                        >
                            View on map
                        </a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col justify-start flex-1">
                        <h2 className="text-white/90 text-2xl lg:text-3xl font-semibold mb-4 uppercase">
                            Contact Us
                        </h2>
                        <p className="text-white/80 uppercase mb-2">
                            (325) 658-3977
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            hidalgorestaurant@gmail.com
                        </p>
                        <p className="text-white/80 uppercase">
                            2020 S Bryant Blvd, San Angelo
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col justify-start flex-1">
                        <h2 className="text-white/90 text-2xl lg:text-3xl font-semibold mb-4 uppercase">
                            Opening Hours
                        </h2>
                        <p className="text-white/80 uppercase mb-2">
                            Monday: <span className="font-bold">7AM - 9PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Tuesday: <span className="font-bold">7AM - 9PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Wednesday: <span className="font-bold">7AM - 9PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Thursday: <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Friday: <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Saturday: <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase">
                            Sunday: <span className="font-bold">7AM - 9:45PM</span>
                        </p>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col justify-start flex-1">
                        <h2 className="text-white/90 text-2xl lg:text-3xl font-semibold mb-4 uppercase">
                            Quick Links
                        </h2>
                        <a
                            href="#"
                            className="text-white/80 uppercase mb-2 hover:text-white transition-colors duration-300"
                        >
                            HOME
                        </a>
                        <a
                            href="#"
                            className="text-white/80 uppercase mb-2 hover:text-white transition-colors duration-300"
                        >
                            MENU
                        </a>
                        <a
                            href="#"
                            className="text-white/80 uppercase mb-2 hover:text-white transition-colors duration-300"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#"
                            className="text-white/80 uppercase hover:text-white transition-colors duration-300"
                        >
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
