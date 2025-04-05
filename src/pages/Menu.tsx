import menu2 from "@/assets/images/Menu-img-2.jpg";
import menuCover from "@/assets/images/MenuBackground.jpg";
import menu3 from "@/assets/images/food-image-1.jpg";
import menu4 from "@/assets/images/food-image-2.jpg";
import menu5 from "@/assets/images/food-image-3.jpg";
import menu6 from "@/assets/images/food-image-4.jpg";
import menu7 from "@/assets/images/food-image-5.jpg";
// Add new imports for the additional sections
import menu8 from "@/assets/images/food-image-7.jpg";
import MenuItem from "@/components/common/MenuItem";
import BottomHeader from "@/components/layouts/BottomHeader";
import foodItems from "@/data/foodItemsWithImages";
import { fontFamilies } from "@/styles/fonts";
import { FoodItem } from "@/types";
import React, { useEffect, useState } from "react";

// import menu10 from "@/assets/images/food-image-9.jpg";

const Menu: React.FC = () => {
    const [menuItems, setMenuItems] = useState<FoodItem[]>([]);

    useEffect(() => {
        setMenuItems(foodItems);
    }, []);

    const renderMenuSection = (
        title: string,
        type: string,
        coverImage: string
    ) => {
        const sectionItems = menuItems.filter(
            (item) => item?.type?.toLowerCase() === type.toLowerCase()
        );
        const midPoint = Math.ceil(sectionItems.length / 2);
        const firstCol = sectionItems.slice(0, midPoint);
        const secondCol = sectionItems.slice(midPoint);

        return (
            <div className="w-full mb-20">
                {/* Section Cover Image */}
                <div className="w-full h-[400px] relative mb-6">
                    {" "}
                    {/* Increased height from 300px to 400px */}
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />{" "}
                    {/* Removed title from here */}
                </div>

                {/* Section Title - Moved below image */}
                <div className="container mx-auto mt-16 px-4 mb-10">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl text-left font-bold uppercase"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        {title}
                    </h1>
                </div>

                {/* Menu Items Grid */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* First Column */}
                        <div className="space-y-4">
                            {firstCol.map((item, idx) => (
                                <MenuItem
                                    key={`${item.name}-${idx}`}
                                    name={item.name}
                                    price={item.price}
                                    desc={item?.desc ?? ""}
                                />
                            ))}
                        </div>

                        {/* Second Column */}
                        <div className="space-y-4">
                            {secondCol.map((item, idx) => (
                                <MenuItem
                                    key={`${item.name}-${idx}`}
                                    name={item.name}
                                    price={item.price}
                                    desc={item?.desc ?? ""}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-white">
            {/* Sticky header container */}
            <div className="sticky top-[40px] z-50">
                {" "}
                {/* 40px matches TopHeader height */}
                <BottomHeader isMenu={true} />
            </div>

            {/* Rest of the menu content */}
            <div className="pt-4">
                {renderMenuSection("Appetizers", "appetizer", menuCover)}
                {renderMenuSection("Salads", "salad", menu2)}
                {renderMenuSection("Mexican Dinners", "mexican dinner", menu3)}
                {renderMenuSection("Fajitas", "fajitas", menu4)}
                {renderMenuSection("Steaks", "steak", menu5)}
                {renderMenuSection("Tapatios", "tapatios", menu6)}
                {renderMenuSection("House Specialties", "specialty", menu7)}
                {renderMenuSection("Burritos", "burrito", menu8)}
                {renderMenuSection("American Classics", "american", menu2)}
                {renderMenuSection("Burgers", "burger", menu3)}
                {renderMenuSection("Seniors & Kids menu", "kids", menu8)}
                {renderMenuSection("Side Orders", "side", menu4)}
                {renderMenuSection("Beverages", "beverage", menu8)}
                {renderMenuSection("Desserts", "dessert", menu5)}
            </div>
            {/* Footer */}
            <div className="flex flex-col lg:flex-row w-full bg-black overflow-hidden py-8 px-8 lg:px-16 gap-8 lg:gap-16">
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
    );
};

export default Menu;
