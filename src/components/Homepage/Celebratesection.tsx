/** @format */
import Celeb from "../../assets/celeb.png";
const CelebrateSection = () => {
  return (
    <div className="w-full py-20">
      <div className="grid grid-cols-2 gap-10 px-12 mx-auto w-full max-w-7xl items-center ">
        <div className="flex justify-center">
          <img
            src={Celeb}
            alt="celebrateImg"
            className="object-cover rounded-2xl shadow-lg md:w-96 md:h-96"
          />
        </div>

        <div className="w-[80%] mx-auto space-y-5 text-start  h-full">
          <p className="text-4xl md:text-6xl font-bold leading-tight">
            Plan <span className="text-orange-500">Less,</span>{" "}
            <span className="text-orange-500">Celebrate</span> More
          </p>
          <p>
            From birthdays to weddings — and everything in between — Eventador
            connects you with trusted, professional vendors so you can plan your
            event with ease. Browse services, book in minutes, and let us handle
            the coordination. No stress, no back-and-forth. Just one simple app
            that brings your event to life, so you can focus on making memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CelebrateSection;
