/** @format */
import ExpeImg from "../../assets/expe.png";
const FeatureSection = () => {
  return (
    <section className="bg-black  h-[1000px]">
      <div className="bg-black h-[70%]">
        <div className="px-12 max-w-7xl mx-auto">
          <div className="flex justify-normal gap-1 items-center ">
            <div className="bg-[#FF8246] h-1 w-20"></div>
            <p className="text-white">Features</p>
          </div>
          <div className="grid grid-cols-2 gap-20 py-10 items-center">
            <p className="text-7xl font-semibold leading-tight text-[#FF8246]">
              Key Features of our Eventador
            </p>

            <div className="flex justify-normal gap-1 items-center text-start">
              <div className="bg-[#FF8246] h-20 w-1"></div>
              <p className="text-white">
                At Eventadore, we take the stress out of event planning. From
                intimate gatherings to grand celebrations, we bring your vision
                to life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="rounded-2xl p-6 bg-white text-center  h-[649px] relative">
              <p className="text-2xl font-semibold mb-2">
                Book <span className="text-[#FF8246]">Trusted Vendors</span> in
                Minutes
              </p>
              <p className="max-w-md mx-auto text-gray-700">
                No more endless calls or quotes. With Eventador, you can browse
                vetted vendors, check availability, and confirm your booking—
                all in just a few taps.
              </p>
              <p className="mt-3">Instant Booking</p>

              <div className="absolute  flex items-center justify-center  w-full">
                <img src={ExpeImg} alt="image" className="w-[50%] h-[50%]" />
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white text-center  h-[649px] relative">
              <p className="text-2xl font-semibold mb-2">
                Manage Your <span className="text-[#FF8246]">Entire Event</span>{" "}
                in One App
              </p>
              <p className="max-w-md mx-auto text-gray-700">
                From schedules to payments, messages to vendor info—everything
                lives in one place. No more juggling spreadsheets, emails, or
                group chats.
              </p>
              <p className="mt-3">All-in-One Coordination</p>
              <div className="absolute  flex items-center justify-center  w-full">
                <img src={ExpeImg} alt="image" className="w-[50%] h-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[30%]"></div>
    </section>
  );
};

export default FeatureSection;
