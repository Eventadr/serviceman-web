/** @format */
import EventImg from "../assets/event.png";

const Event = [
  {
    image: EventImg,
    icon: "",
    platform: "Platform",
    heading: "Built to simplify, powered by trust",
    description:
      "Eventador connects hosts and vendors in one easy-to-use app that takes the stress out of planning.",
  },
  {
    image: EventImg,
    icon: "",
    platform: "Platform",
    heading: "Built to simplify, powered by trust",
    description:
      "Eventador connects hosts and vendors in one easy-to-use app that takes the stress out of planning.",
  },
  {
    image: EventImg,
    icon: "",
    platform: "Platform",
    heading: "Built to simplify, powered by trust",
    description:
      "Eventador connects hosts and vendors in one easy-to-use app that takes the stress out of planning.",
  },
];
const FeatureEvent = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-xl text-center mx-auto space-y-5 mb-5 px-12">
        <p className="text-7xl font-semibold leading-tight ">
          Featured <span className="text-[#FF8246]">Events</span>
        </p>
        <p className="text-2xl">
          At Eventadore, we take the stress out of event planning. From intimate
          gatherings to grand celebrations, we bring your vision to life.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {Event.map((item, index) => {
          return (
            <div key={index} className="rounded-lg overflow-clip">
              <img src={item.image} alt="image" />
              <div className="space-y-3 mt-3">
                <img src={item.icon} alt="image" />
                <p>{item.platform}</p>
                <p>{item.heading}</p>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureEvent;
