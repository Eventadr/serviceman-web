/** @format */

import React, { useState } from "react";
import Form from "./Form";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

interface Props {
  logo: string;
}

export default function Navbar({ logo }: Props) {
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
      <nav className=" sticky w-full z-40 transition-all duration-300 bg-white shadow-md py-4 sm:py-6">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
                />
                <p className="text-base sm:text-xl md:text-2xl">Eventador</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-4 xl:space-x-6 flex items-center">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["How It Works", "/how"],
                  ["Features", "/features"],
                  ["Testimonials", "/testimonials"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuLink
                      href={href}
                      className="text-gray-700 hover:text-[#FF8246] transition-colors font-medium text-sm xl:text-base"
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTA */}
            <div className="hidden lg:flex animate-fade-in">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#FF8246] text-white font-medium px-4 xl:px-6 py-2 rounded-full hover:shadow-lg transition-shadow text-sm xl:text-base"
              >
                Get the App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-blue-900 hover:text-blue-700">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
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
