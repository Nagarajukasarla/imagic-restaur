import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartWithCount from '../common/CartWithCount';
import menuIcon from '@/assets/icons/menu.svg';
import closeIcon from '@/assets/icons/close.svg';

const MobileScreenHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ["Home", "About", "Menu", "Contact"];

    const menuVariants = {
        closed: {
            x: "-100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <>
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--mobile-nav-bg)] z-40 shadow-lg">
                <div className="flex items-center justify-between h-full px-4">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-white p-2"
                    >
                        <img 
                            src={menuIcon} 
                            alt="Menu"
                            className="w-6 h-6 brightness-0 invert"
                        />
                    </button>
                    
                    <h1 className="text-2xl font-bold font-['Playfair_Display'] text-white">
                        Hidalgo
                    </h1>
                    
                    {/* Cart with Count */}
                    <CartWithCount count={5} /> {/* Replace with actual cart count */}
                </div>
            </header>

            {/* Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="md:hidden fixed inset-0 bg-black/50 z-40"
                    />
                )}
            </AnimatePresence>

            {/* Side Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden fixed top-0 left-0 w-4/5 max-w-sm h-full bg-[var(--mobile-nav-bg)] z-50 shadow-xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                                <h2 className="text-xl font-['Playfair_Display'] text-white">Menu</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white p-2"
                                >
                                    <img 
                                        src={closeIcon} 
                                        alt="Close menu"
                                        className="w-6 h-6 brightness-0 invert"
                                    />
                                </button>
                            </div>
                            
                            <nav className="flex-1 py-4">
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block px-6 py-3 text-lg text-white hover:bg-white/10 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileScreenHeader;
