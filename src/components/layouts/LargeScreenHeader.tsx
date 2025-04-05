import React from "react";
import phoneIcon from "@/assets/icons/phone.png";
import locationIcon from "@/assets/icons/location.png";
import emailIcon from "@/assets/icons/email.png";
import { fontFamilies } from "@/styles/fonts";

const Header: React.FC = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-50">
            {/* Top Row with solid background */}
            <div className="bg-[var(--lg-screen-header-bg)] py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Left Section - Address & Phone */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img
                                src={locationIcon}
                                alt="location"
                                className="h-5 w-5"
                            />
                            <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                                style={{ fontFamily: fontFamilies.medium }}>
                                2020 S Bryant Blvd, San Angelo, TX 76903
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src={phoneIcon}
                                alt="phone"
                                className="h-5 w-5"
                            />
                            <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                                style={{ fontFamily: fontFamilies.medium }}>
                                (325) 658-3977
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Email & Social */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img
                                src={emailIcon}
                                alt="email"
                                className="h-5 w-5"
                            />
                            <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                                style={{ fontFamily: fontFamilies.medium }}>
                                hidalgorestaurant@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Transparent with gradient overlay only */}
            <div className="absolute w-full bg-gradient-to-b from-black/30 via-black/10 to-transparent py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold font-['Playfair_Display'] text-white">
                            Hidalgo
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-8">
                        {["Home", "About", "Menu", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-white hover:text-white/80 transition-colors duration-300 group py-2"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
