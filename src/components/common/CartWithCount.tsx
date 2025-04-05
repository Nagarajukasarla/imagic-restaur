import React from 'react';
import dineIcon from '@/assets/icons/dine.svg';

interface CartWithCountProps {
    count: number;
}

const CartWithCount: React.FC<CartWithCountProps> = ({ count }) => {
    return (
        <div className="relative inline-flex items-center justify-center">
            {/* Cart Icon */}
            <button className="p-2 hover:opacity-80 active:scale-95 transition-all duration-200">
                <img 
                    src={dineIcon} 
                    alt="Cart" 
                    className="w-12 h-12 text-white" // Increased to w-10 h-10 (40px)
                />
            </button>

            {/* Count Badge */}
            {count > 0 && (
                <div className="absolute top-[12%] left-[65%] w-4 h-4 bg-white rounded-full 
                    flex items-center justify-center shadow-sm"> {/* Smaller badge (16px) positioned on icon */}
                    <span className="text-xs font-bold text-[var(--bg-color-dark)]">
                        {count > 99 ? '99+' : count}
                    </span>
                </div>
            )}
        </div>
    );
};

export default CartWithCount;
