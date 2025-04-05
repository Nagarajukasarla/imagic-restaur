import background1 from "@/assets/images/background-2.jpeg";
import background2 from "@/assets/images/background-3.jpeg";
import background from "@/assets/images/background.jpg";
import { default as restaurant1 } from "@/assets/images/food-image-8.jpg";
import sectionBackground from "@/assets/images/section-background.jpg";
import treeBackground from "@/assets/images/tree-background.jpg";
import foodItems from "@/data/foodItemsWithImages";
import reviews from "@/data/reviews";
import { fontFamilies } from "@/styles/fonts";
import "@/styles/slick-custom.css";
import { FoodItem, Review } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CombosCard from "../common/CombosCard";
import ImageChangeOnHoverContainer from "../common/ImageChangeOnHoverContainer";
import ReviewCard from "../common/ReviewCard";
import BottomHeader from "./BottomHeader";

const Content: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [background, background1, background2];
    const [topMenuItems, setTopMenuItems] = useState<FoodItem[]>([]);
    const [reviewsData, setReviewsData] = useState<Review[]>([]);

    useEffect(() => {
        setTopMenuItems(foodItems);
        setReviewsData(reviews);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        // Cleanup on component unmount
        return () => clearInterval(timer);
    }, [images.length]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full relative select-none touch-none pt-[40px] bg-black/100">
            {" "}
            {/* Adjusted padding to match TopHeader height */}
            {/* Hero Section */}
            <div className="h-screen relative overflow-hidden bg-black touch-none">
                {/* Background image carousel */}
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-[1]" // Lower z-index
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={`Slide ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Permanent dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-[2]" />{" "}
                <BottomHeader />
                {/* Slide Indicators */}
                <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
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
                {/* Content - Updated to match MobileContent style */}
                <div className="absolute inset-0 z-[15] flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        Experience the Rich Flavors of
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        Hidalgo's Restaurant
                    </motion.p>

                    {/* Order Now Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="btn-primary text-white px-5 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300"
                    >
                        <span className="text-xl">Order Now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 inline-block animate-moveRight"
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
                    </motion.button>
                </div>
            </div>
            {/* About Section */}
            <div className="bg-black py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-5xl text-white mb-4"
                            style={{ fontFamily: fontFamilies.display }}
                        >
                            The Art Of Making Food
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
                    </motion.div>

                    <div className="flex flex-wrap items-start gap-12 px-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 min-w-[300px]"
                        >
                            <p className="text-gray-200 leading-relaxed text-lg lg:text-2xl pt-10">
                                Welcome to Hidalgo's Restaurant, where culinary
                                passion meets a warm and inviting atmosphere!
                                <br />
                                Founded in 2010 by Hidalgo's Restaurant, our
                                restaurant is dedicated to providing an
                                unforgettable dining experience that celebrates
                                the rich flavors and diverse cuisines of San
                                Angelo.
                                <br />
                            </p>
                            <div className="w-fit mt-5">
                                <button
                                    className="bg-white text-black w-[100px] h-[40px] text-[12px] tracking-[1px] transition-all duration-300 hover:text-white hover:border border-white hover:bg-transparent cursor-pointer"
                                    style={{ fontFamily: fontFamilies.heading }}
                                >
                                    VIEW MENU
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 min-w-[300px] space-y-6"
                        >
                            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={restaurant1}
                                    alt="Restaurant Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section - 2 */}
                <div className="relative mt-35">
                    <div className="relative">
                        <img
                            src={treeBackground}
                            className="w-full h-[600px] md:h-[450px] lg:h-[700px] object-cover"
                            alt="Tree background"
                        />
                        {/* Dim overlay only for the image */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Text container with responsive padding */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center">
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-2xl leading-[1.2] sm:text-3xl sm:leading-[1.3] md:text-4xl md:leading-[1.4] lg:text-5xl lg:leading-[1.4] xl:text-6xl xl:leading-[1.5] text-white font-bold mb-4 uppercase line-clamp-3"
                                style={{ fontFamily: fontFamilies.display }}
                            >
                                Try our specialties and you will start the day
                                with a huge smile.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-2xl leading-[1.2] sm:text-3xl sm:leading-[1.3] md:text-4xl md:leading-[1.4] lg:text-5xl lg:leading-[1.4] xl:text-6xl xl:leading-[1.5] text-white font-bold uppercase"
                                style={{ fontFamily: fontFamilies.display }}
                            ></motion.p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section - 3 */}
            <div className="relative w-full h-full">
                <ImageChangeOnHoverContainer items={topMenuItems} />
            </div>
            {/* Section - 4 */}
            <div className="relative mt-35">
                {/* Background with text container */}
                <div className="relative">
                    <img
                        src={sectionBackground}
                        className="w-full h-[600px] md:h-[450px] lg:h-[700px] object-cover border border-white/100"
                        alt="Section background"
                    />
                    {/* Dim overlay only for the image */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Centered text container */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center">
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-2xl leading-[1.2] sm:text-3xl sm:leading-[1.3] md:text-4xl md:leading-[1.4] lg:text-5xl lg:leading-[1.4] xl:text-6xl xl:leading-[1.5] text-white font-bold mb-4 uppercase line-clamp-3"
                                style={{ fontFamily: fontFamilies.display }}
                            >
                                Y'all are in for a treat!
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-xl sm:text-2xl md:text-3xl text-white/80"
                                style={{ fontFamily: fontFamilies.display }}
                            >
                                We've got finger-lickin' good recipes and chefs
                                who know how to bring the flavor
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Combos Cards Container */}
                <div className="flex flex-col lg:flex-row w-full bg-black overflow-hidden">
                    {" "}
                    {/* Added overflow-hidden */}
                    <div className="h-px lg:h-auto lg:w-px bg-white/40 my-2 sm:my-3 lg:my-0"></div>{" "}
                    <CombosCard />
                    {/* Horizontal line for mobile/tablet, Vertical line for desktop */}
                    <div className="h-px lg:h-auto lg:w-px bg-white/40 my-2 sm:my-3 lg:my-0"></div>{" "}
                    {/* Reduced margins */}
                    <CombosCard />
                    {/* Horizontal line for mobile/tablet, Vertical line for desktop */}
                    <div className="h-px lg:h-auto lg:w-px bg-white/40 my-2 sm:my-3 lg:my-0"></div>{" "}
                    {/* Reduced margins */}
                    <CombosCard />
                    <div className="h-px lg:h-auto lg:w-px bg-white/40 my-2 sm:my-3 lg:my-0"></div>{" "}
                </div>
            </div>
            {/* Reviews Section-5 */}
            <div className="bg-black pt-20 pb-15 overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl text-white text-center mb-4 lg:mb-8"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        What Our Customers Say
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center text-white/80 mb-16 text-xl lg:text-2xl"
                        style={{ fontFamily: fontFamilies.primary }}
                    >
                        Honest words from those who've dined with us!
                    </motion.p>

                    {/* Reviews Slider */}
                    <div className="review-slider relative max-w-[1400px] mx-auto z-0 pb-10">
                        <Slider {...sliderSettings}>
                            {reviewsData.map((review, index) => (
                                <div key={index} className="px-3 py-4">
                                    <ReviewCard
                                        name={review.name}
                                        rating={review.rating}
                                        comment={review.comment}
                                        date={review.date}
                                        likes={review.likes!}
                                        onClickLike={() => {}}
                                        onRatingChange={() => {}}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* Visit US Section - 6 */}
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

export default Content;
