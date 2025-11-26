/** @format */
import AboutImg from "../../assets/aboutus.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${AboutImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col mx-auto">
          <div className="flex justify-normal gap-1 items-center ">
            <div className="bg-[#FF8246] h-1 w-20"></div>
            <p className="text-white">Get to know us</p>
          </div>
          <p className="text-7xl text-white font-semibold leading-tight">
            Who We Are
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
