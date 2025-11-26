/** @format */

import Phone from "../../assets/phone.png";

const Points = [
  {
    id: 1,
    description:
      "From quick weekend getaways to once-in-a-lifetime adventures, explore journeys crafted to match your pace, style, and personal freedom.",
  },
  {
    id: 2,
    description:
      "Step away from the noise and immerse yourself in majestic mountains, tranquil seas, and landscapes that awaken a deeper connection to nature.",
  },
  {
    id: 3,
    description:
      "Savor authentic cuisines, explore vibrant food cultures, and let every journey awaken your senses with flavors from around the world.",
  },
];
const VendorsSection = () => {
  return (
    <section className="py-20 w-full ">
      <div className="px-12 m-auto mt-10 grid lg:grid-cols-2  gap-5">
        <div className="max-w-full lg:w-[80%] space-y-5 mx-auto">
          <div className="space-y-5">
            <p className="text-2xl font-semibold leading-tight">For Vendors</p>
            <p className="w-[530px] font-medium">
              Explore curated vendors for catering, decor, music, and more, all
              reviewed and verified.
            </p>
          </div>
          {Points.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-8 h-8 rounded-xl bg-[#FF8246] "></div>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img src={Phone} alt="phone-img" className="lg:w-full lg:h-full " />
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
