import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "@/assets/icons/close.svg";
import { fontFamilies } from "@/styles/fonts";

interface SlidingPopupWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const SlidingPopupWrapper: React.FC<SlidingPopupWrapperProps> = ({
    isOpen,
    onClose,
    children,
    title = "Add Review",
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[var(--overlay-bg)] z-40"
                        onClick={onClose}
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                        }}
                        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
                            <h2
                                className="text-lg font-semibold"
                                style={{ fontFamily: fontFamilies.heading }}
                            >
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <img
                                    src={closeIcon}
                                    alt="Close"
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4">{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SlidingPopupWrapper;
