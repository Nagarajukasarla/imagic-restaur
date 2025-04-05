import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import foodMenuSvg from '@/assets/icons/cutlery.svg';
import homeSvg from '@/assets/icons/home.svg';
import reviewsSvg from '@/assets/icons/star.svg';

const NavButton: React.FC<{
    to: string;
    icon: string; // Changed to accept SVG source directly
    label: string;
    isActive: boolean;
}> = ({ to, icon, label, isActive }) => (
    <Link
        to={to}
        className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-300'
        }`}
    >
        <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
        >
            <img 
                src={icon} 
                alt={label}
                className={`w-6 h-6 ${
                    isActive 
                        ? 'brightness-0 invert opacity-100' // White color when active
                        : 'brightness-0 invert opacity-60' // Gray color when inactive
                }`}
            />
            <span className={`text-[min(0.75rem,3vw)] mt-1 transition-colors ${
                isActive ? 'text-white' : 'text-gray-400'
            }`}>
                {label}
            </span>
        </motion.div>
    </Link>
);

const MobileBottomNavbar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { path: '/', icon: homeSvg, label: 'Home' },
        { path: '/order', icon: foodMenuSvg, label: 'Menu' }, // Changed from '/menu' to '/order'
        { path: '/reviews', icon: reviewsSvg, label: 'Reviews' },
    ];

    return (
        <motion.nav 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--mobile-nav-bg)] shadow-lg rounded-t-2xl z-50"
            style={{ 
                height: 'min(64px, 16vw)',
                minHeight: '48px'
            }}
        >
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => (
                    <NavButton
                        key={item.path}
                        to={item.path}
                        icon={item.icon}
                        label={item.label}
                        isActive={currentPath === item.path}
                    />
                ))}
            </div>
        </motion.nav>
    );
};

export default MobileBottomNavbar;
