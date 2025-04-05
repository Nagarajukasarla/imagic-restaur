import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./Content";
import MobileBottomNavbar from "./MobileBottomNavbar";
import TopHeader from "./TopHeader";
import MobileScreenHeader from "./MobileScreenHeader";
import MobileContent from "./MobileContent";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const FoodMenu = lazy(() => import("../../pages/FoodMenu"));
const ReviewsPage = lazy(() => import("../../pages/Reviews"));

const Root: React.FC = () => {
    return (
        <>
            <div className="hidden md:block">
                <TopHeader />
            </div>
            <div className="block md:hidden">
                <MobileScreenHeader />
            </div>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="hidden md:block">
                                <Content />
                            </div>
                            <div className="block md:hidden">
                                <MobileContent />
                            </div>
                        </>
                    }
                />
                <Route 
                    path="/menu"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Menu />
                        </Suspense>
                    }
                />
                <Route
                    path="/order"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <FoodMenu />
                        </Suspense>
                    }
                />
                <Route
                    path="/reviews"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ReviewsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact />
                        </Suspense>
                    }
                />
            </Routes>

            <div className="block md:hidden">
                <MobileBottomNavbar />
            </div>
        </>
    );
};

export default Root;
