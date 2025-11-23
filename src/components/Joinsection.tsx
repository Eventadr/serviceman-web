/** @format */
import React from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";

const JoinSection = () => {
  return (
    <section className="relative w-full py-20 flex flex-col items-center ">
      <div className=" w-full px-12 items-center space-y-10 translate-y-1 animate-fade-in">
        <img
          src={Image1}
          alt="floating-img"
          className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg top-36 "
        />
        <div className=" flex justify-between w-full">
          <img
            src={Image2}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg "
          />
          <img
            src={Image3}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className=" flex justify-between w-full ">
          <img
            src={Image4}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg right-[10%]"
          />
          <img
            src={Image5}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg left-[10%]"
          />
        </div>
        <div className=" flex justify-between w-full ">
          <img
            src={Image6}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg right-[20%]"
          />
          <img
            src={Image7}
            alt="floating-img"
            className="relative mx-auto w-36 h-36 md:w-52 md:h-40 object-cover rounded-2xl shadow-lg left-[20%]"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[10%] -bottom-20 w-full">
          <div className="text-center px-4 max-w-[695px] mt-10 ">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Join <span className="text-orange-500">1 million+</span> vendors
              on eventador
            </h1>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Showcase your services, connect with real clients, and grow your
              business — all in one powerful app made for professionals like
              you.
            </p>
          </div>

          {/* Vendor list */}
          <div className="flex gap-6 flex-wrap justify-center text-gray-700 mt-6">
            {[
              "Menscook",
              "Ayoncity Events",
              "Pava Events",
              "Unique Floral",
              "Akwaaba Group",
            ].map((name) => (
              <span key={name} className="font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
