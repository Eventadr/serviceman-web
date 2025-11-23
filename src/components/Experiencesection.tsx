/** @format */
import ExpeImg from "../assets/expe.png";

const Experience = [
  {
    icon: "",
    heading: "Stress-Free Planning",
    description:
      "We handle everything — from setup to vendors — so you can enjoy your event without the headache.",
  },
  {
    icon: "",
    heading: "Personalized Experiences",
    description:
      "We handle everything — from setup to vendors — so you can enjoy your event without the headache.",
  },
  {
    icon: "",
    heading: "Professional & On-Time Delivery",
    description:
      "We handle everything — from setup to vendors — so you can enjoy your event without the headache.",
  },
  {
    icon: "",
    heading: "Stress-Free Planning",
    description:
      "We handle everything — from setup to vendors — so you can enjoy your event without the headache.",
  },
];
const ExperienceSection = () => {
  return (
    <div className="max-w-full py-20">
      <div className="max-w-[774px] mx-auto space-y-6">
        <p className="text-4xl md:text-6xl font-bold leading-tight">
          The <span className="text-orange-500">Eventador</span> Experience
        </p>
        <p className="max-w-[570px] mx-auto text-base text-center">
          Showcase your services, connect with real clients, and grow your
          business all in one powerful app made for professionals like you.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-16 justify-between items-center py-20 ">
        {Experience.map((card, index) => (
          <div key={index} className="text-center w-[360px] mx-auto">
            <img src={card.icon} alt="icon" className="mx-auto" />
            <p className="font-semibold mt-4">{card.heading}</p>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </div>
        ))}
        <div className="absolute  flex items-center justify-center  w-full">
          <img src={ExpeImg} alt="image" className="w-[20%] h-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
