import { fontFamilies } from "@/styles/fonts";
import React from "react";

interface MenuItemProps {
    name: string;
    price: number;
    desc: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, desc }) => {
    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center gap-4">
                <p
                    className="text-xl font-bold uppercase"
                    style={{ fontFamily: fontFamilies.display }}
                >
                    {name}
                </p>
                <div className="flex-grow border-b border-gray-400 mx-2 mt-2" />
                <p
                    className="text-xl font-bold whitespace-nowrap"
                    style={{ fontFamily: fontFamilies.display }}
                >
                    ${price.toFixed(2)}
                </p>
            </div>
            <p className="text-sm mt-2 text-gray-600">{desc}</p>
        </div>
    );
};

export default MenuItem;
