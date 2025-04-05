import React from "react";
import phoneIcon from "@/assets/icons/phone.png";
import locationIcon from "@/assets/icons/location.png";
import emailIcon from "@/assets/icons/email.png";
import { fontFamilies } from "@/styles/fonts";

const TopHeader: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-[var(--lg-screen-header-bg)] py-2 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Left Section - Address & Phone */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src={locationIcon} alt="location" className="h-5 w-5" />
                        <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                            style={{ fontFamily: fontFamilies.medium }}>
                            2020 S Bryant Blvd, San Angelo, TX 76903
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={phoneIcon} alt="phone" className="h-5 w-5" />
                        <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                            style={{ fontFamily: fontFamilies.medium }}>
                            (325) 658-3977
                        </p>
                    </div>
                </div>

                {/* Right Section - Email & Social */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src={emailIcon} alt="email" className="h-5 w-5" />
                        <p className="text-md tracking-[0.5px] text-[var(--lg-screen-header-fg)]"
                            style={{ fontFamily: fontFamilies.medium }}>
                            hidalgorestaurant@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;