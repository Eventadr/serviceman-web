/** @format */

import Appstore from "../../assets/appstore.png";
import Playstore from "../../assets/playstore.png";
import Phone from "../../assets/phone.png";

const HeroSection = () => {
  return (
    <section className="py-20 w-full ">
      <div className="px-12 m-auto mt-10 grid lg:grid-cols-2  gap-5">
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
          <img src={Phone} alt="phone-img" className="lg:w-full lg:h-full " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
