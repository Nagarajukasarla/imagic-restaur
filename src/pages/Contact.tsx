import React from "react";
import { motion } from "framer-motion";
import { fontFamilies } from "@/styles/fonts";
import MapWithPointer from "@/components/common/MapWithPointer";
import locationImg from "@/assets/images/MenuBackground.jpg";
import workingHoursImg from "@/assets/images/Menu-img-2.jpg";
import BottomHeader from "@/components/layouts/BottomHeader";

const Contact: React.FC = () => {
    const restaurantLocation: [number, number] = [31.43315, -100.45091];

    return (
        <div className="bg-black min-h-screen">
            <div className="sticky top-[40px] z-50">
                <BottomHeader isMenu={true} />
            </div>

            {/* Location & Working Hours Section */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Location Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-full max-w-[400px] aspect-square mb-22">
                            <img
                                src={locationImg}
                                alt="Restaurant Location"
                                className="w-full h-[470px] object-cover rounded-full"
                            />
                        </div>
                        <h2
                            className="text-4xl text-white mb-6 uppercase tracking-wider"
                            style={{ fontFamily: fontFamilies.display }}
                        >
                            Location
                        </h2>
                        <div className="space-y-2">
                            <p
                                className="text-white/90 text-lg"
                                style={{ fontFamily: fontFamilies.primary }}
                            >
                                2020 S Bryant Blvd,
                            </p>
                            <p
                                className="text-white/90 text-lg"
                                style={{ fontFamily: fontFamilies.primary }}
                            >
                                San Angelo, TX 76903
                            </p>
                            <p
                                className="text-white/90 text-lg mt-4"
                                style={{ fontFamily: fontFamilies.primary }}
                            >
                                (325) 658-3977
                            </p>
                        </div>
                    </div>

                    {/* Vertical Divider - Only visible on md and up */}
                    <div className="hidden md:block absolute right-1/2 top-1/2 -translate-y-1/2 w-[1px] h-[77%] bg-white/20"></div>

                    {/* Working Hours Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-full max-w-[400px] aspect-square mb-22">
                            <img
                                src={workingHoursImg}
                                alt="Working Hours"
                                className="w-full h-[470px] object-cover rounded-full"
                            />
                        </div>
                        <h2
                            className="text-4xl text-white mb-6 uppercase tracking-wider"
                            style={{ fontFamily: fontFamilies.display }}
                        >
                            Working Hours
                        </h2>
                        <div className="space-y-3">
                            <p className="text-white/90 text-lg">
                                Monday - Wednesday:{" "}
                                <span className="font-bold">7AM - 9PM</span>
                            </p>
                            <p className="text-white/90 text-lg">
                                Thursday - Saturday:{" "}
                                <span className="font-bold">7AM - 10PM</span>
                            </p>
                            <p className="text-white/90 text-lg">
                                Sunday:{" "}
                                <span className="font-bold">7AM - 9:45PM</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container mx-auto px-4 py-20">
                <h2
                    className="text-3xl text-white mb-8 text-center uppercase"
                    style={{ fontFamily: fontFamilies.display }}
                >
                    Find Us Here
                </h2>
                <div className="rounded-lg overflow-hidden h-[400px]">
                    <MapWithPointer
                        center={restaurantLocation}
                        zoom={15}
                        popupText="Hidalgo's Restaurant"
                    />
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
                            Tuesday:{" "}
                            <span className="font-bold">7AM - 9PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Wednesday:{" "}
                            <span className="font-bold">7AM - 9PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Thursday:{" "}
                            <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Friday:{" "}
                            <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase mb-2">
                            Saturday:{" "}
                            <span className="font-bold">7AM - 10PM</span>
                        </p>
                        <p className="text-white/80 uppercase">
                            Sunday:{" "}
                            <span className="font-bold">7AM - 9:45PM</span>
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

export default Contact;
