/** @format */
import MImg from "../../assets/serve.png";
const ServicesTwo = () => {
  return (
    <div className="w-full py-20 bg-black">
      <div className="grid grid-cols-2 gap-10 px-12 mx-auto w-full max-w-7xl items-start ">
        <div className="flex justify-center">
          <img
            src={MImg}
            alt="celebrateImg"
            className="object-cover rounded-2xl "
          />
        </div>
        <div className="w-[80%] mx-auto space-y-5 text-start  h-full text-white">
          <p className="text-4xl md:text-6xl font-bold leading-tight">
            Who We Serve
          </p>
          <p className="text-3xl font-semibold">
            Helping You Host Without the Headache
          </p>
          <p className="text-2xl">
            Eventador takes the stress out of event planning. From birthdays to
            weddings, you can quickly find and book trusted vendors, manage your
            event, and handle payments — all in one app.No chaos. No confusion.
            Just easy planning and unforgettable moments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
