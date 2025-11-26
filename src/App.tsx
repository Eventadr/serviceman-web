/** @format */

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/Untitled design.jpg";

import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

import FooterSection from "./components/Footer";
import Homepage from "./components/Homepage";

import AboutUs from "./components/Aboutus";
import HowSection from "./components/HowItWorks";
import { Toaster } from "sonner";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Navbar logo={logo} />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how" element={<HowSection />} />
      </Routes>
      <FooterSection />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
