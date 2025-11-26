/** @format */
import MImg from "../../assets/about2.png";
const Values = () => {
  return (
    <div className="w-full py-20">
      <div className="grid grid-cols-2 gap-10 px-12 mx-auto w-full max-w-7xl items-center ">
        <div className="flex justify-center">
          <img
            src={MImg}
            alt="celebrateImg"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-[80%] mx-auto space-y-5 text-start  h-full">
          <p className="text-4xl md:text-6xl font-bold leading-tight">
            Our Core Values
          </p>
          <p className="text-3xl font-semibold">What We Stand For</p>
          <p className="text-2xl">
            Eventador makes event planning simple, fast, and stress-free. We
            built it for anyone who's ever felt overwhelmed trying to plan an
            event. Whether it’s a birthday, wedding, corporate gathering, or
            something in between — Eventador is your all-in-one solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
