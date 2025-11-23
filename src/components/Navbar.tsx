/** @format */

import React, { useState } from "react";
import Form from "./Form";

interface Props {
  scrolled: boolean;
  logo: string;
}
export default function Navbar({ scrolled, logo }: Props) {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    location: "",
    role: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 animate-fade-in ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center">
              <div className="flex justify-normal gap-1 items-center  ">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden "
                />
                <p>Eventador</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 animate-fade-in">
              <a
                href="#home"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#home"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#home"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Testimonials
              </a>
              <a
                href="#home"
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex space-x-4 animate-fade-in">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r bg-[#FF8246] text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
              >
                Get the App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-blue-900 hover:text-blue-700 animate-fade-in"
              // onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <Form
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
