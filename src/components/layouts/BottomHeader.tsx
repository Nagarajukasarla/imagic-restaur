import React from "react";
import { Link } from "react-router-dom";
import { fontFamilies } from "@/styles/fonts";

interface BottomHeaderProps {
    isMenu?: boolean;
}

const BottomHeader: React.FC<BottomHeaderProps> = ({ isMenu = false }) => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Menu", path: "/menu" },
        { name: "Contact", path: "/contact" }
    ];

    const headerClassName = isMenu
        ? "w-full bg-black py-4"
        : "absolute w-full bg-gradient-to-b from-black/30 via-black/10 to-transparent py-4 z-[20]";

    return (
        <div className={headerClassName}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <h1
                        className="text-3xl font-bold text-white"
                        style={{ fontFamily: fontFamilies.display }}
                    >
                        Hidalgo
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    {navItems.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            className="relative text-white hover:text-white/80 transition-colors duration-300 group"
                            style={{ fontFamily: fontFamilies.medium }}
                        >
                            <span className="text-lg tracking-[0.6px] relative py-2 block">
                                {name}
                                <span
                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                                    style={{ pointerEvents: "none" }}
                                />
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default BottomHeader;
