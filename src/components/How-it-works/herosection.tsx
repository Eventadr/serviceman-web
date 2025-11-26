/** @format */
import HowImg from "../../assets/how.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HowImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-5">
        <div className="flex flex-col mx-auto lg:max-w-md  text-white items-center text-center">
          <p className="lg:text-7xl text-5xl font-semibold leading-tight">
            How It Works
          </p>
          <p>
            From booking to event day, here’s how Eventador simplifies the
            planning experience for both hosts and vendors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
