/** @format */

import { useState, useEffect } from "react";
import Appstore from "../assets/appstore.png";
import Playstore from "../assets/playstore.png";
import Phone from "../assets/phone.png";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "https://i0.wp.com/thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?fit=1500%2C700&ssl=1",
      alt: "Corporate Events",
      title: "Corporate Excellence",
    },
    {
      src: "https://clingevents.com/wp-content/uploads/2022/11/clingevents-decor-scaled.jpeg",
      alt: "Event Decor",
      title: "Elegant Decor",
    },
    {
      src: "https://www.ghanayello.com/img/gh/g/1643966789-84-mostlove-rent-a-car-company.jpg",
      alt: "Luxury Transport",
      title: "Premium Transport",
    },
    {
      src: "https://image.made-in-china.com/2f0j00yzJRDnLskeqP/20X20feet-Frame-Tent-for-Funeral-Event-in-Ghana.webp",
      alt: "Event Tents",
      title: "Professional Setup",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.2);
    }, 50);

    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
    };
  }, [images.length]);

  const hudisangLetters = ["E", "V", "E", "N", "T", "A", "D", "O", "R"];

  return (
    <section className="py-20 w-full">
      <div className="px-12 m-auto mt-10 flex justify-between">
        <div className="max-w-full lg:w-[720px] space-y-5">
          <div className="flex justify-normal gap-1 items-center ">
            <div className="bg-[#FF8246] h-1 w-20"></div>
            <p>Your Gateway to Stress-Free Celebrations</p>
          </div>
          <div className="space-y-5">
            <p className="text-7xl font-semibold leading-tight">
              Your Seamless{" "}
              <span className="text-[#FF8246]">Event Booking</span> Experience
            </p>
            <p className="w-[530px]">
              Discover and book unforgettable events with ease. Eventadore
              brings you closer to the concerts, parties, and experiences you
              love — all in one seamless platform.
            </p>
          </div>
          <div className="flex justify-between w-[502px]">
            <img src={Appstore} alt="appstore-img" />
            <img src={Playstore} alt="playstore-img" />
          </div>
        </div>
        <div>
          <img src={Phone} alt="phone-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
