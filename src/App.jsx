import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

import Navbar from "./components/Navbar/Navbar";
import ContactReveal from "./components/ContactReveal/ContactReveal";

import HeroSection from "./pages/HomeSection/HomeSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import ServicesSection from "./pages/ServicesSection/ServicesSection";
import ContactSection from "./pages/ContactSection/ContactSection";
import WorksSection from "./pages/WorksSection/WorksSection";
import BookingSection from "./pages/BookingSection/BookingSection";

const App = () => {
  const location = useLocation(); // ✅ inside the component

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageTransition><HeroSection /></PageTransition>}
          />
          <Route
            path="/about"
            element={<PageTransition><AboutSection /></PageTransition>}
          />
          <Route
            path="/services"
            element={<PageTransition><ServicesSection /></PageTransition>}
          />
          <Route
            path="/works"
            element={<PageTransition><WorksSection /></PageTransition>}
          />
          <Route
            path="/booking"
            element={<PageTransition><BookingSection /></PageTransition>}
          />
          <Route
            path="/contact"
            element={<PageTransition><ContactSection /></PageTransition>}
          />
        </Routes>
      </AnimatePresence>

      <ContactReveal />
    </>
  );
};

export default App;
