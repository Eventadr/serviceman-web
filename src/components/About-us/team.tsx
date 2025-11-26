/** @format */

import ProfileImg from "../../assets/profile.jpg";

const Team = [
  {
    image: ProfileImg,
    position: "Chief Executive Officer",
    name: "Amelia Hart",
  },
  {
    image: ProfileImg,
    position: "Chief Technology Officer",
    name: "Leo Ramirez",
  },
  {
    image: ProfileImg,
    position: "Head of Product Design",
    name: "Sofia Nguyen",
  },
  {
    image: ProfileImg,
    position: "Lead Software Engineer",
    name: "Ethan Clarke",
  },
  {
    image: ProfileImg,
    position: "Head of Operations",
    name: "Maya Patel",
  },
  {
    image: ProfileImg,
    position: "Head of Customer Success",
    name: "Oliver Brooks",
  },
];

const TeamSection = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-2xl text-center mx-auto space-y-5 mb-5 px-12">
        <p className="text-7xl font-semibold leading-tight ">
          Featured <span className="text-[#FF8246]">Events</span>
        </p>
        <p className="text-2xl">
          At Eventadore, we take the stress out of event planning. From intimate
          gatherings to grand celebrations, we bring your vision to life.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 px-12">
        {Team.map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-lg overflow-clip w-[402px] h-[370px]"
            >
              <img src={item.image} alt="image" />
              <div className="space-y-3 mt-3 absolute bottom-2 w-[90%] bg-white rounded-lg mx-auto right-5 left-5 p-2">
                <p className="text-[#FF8246] font-semibold">{item.position}</p>
                <p className="text-2xl font-bold">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;
