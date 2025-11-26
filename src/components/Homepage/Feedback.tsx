/** @format */

// /** @format */
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../Carousel";
// import Feed1 from "../assets/feedback/feed1.png";
// import Feed2 from "../assets/feedback/feed2.png";
// import Feed3 from "../assets/feedback/feed3.png";
// import Feed4 from "../assets/feedback/feed4.png";
// import { Card, CardContent } from "./ui/card";

// const Feedback = [
//   {
//     fImg: Feed1,
//     message: "",
//   },
//   {
//     fImg: Feed2,
//     message: "",
//   },
//   {
//     fImg: Feed3,
//     message: "",
//   },
//   {
//     fImg: Feed4,
//     message: "",
//   },
//   {
//     fImg: Feed1,
//     message: "",
//   },
// ];
// const FeedbackSection = () => {
//   return (
//     <div className="w-full py-20">
//       <div className="px-12 mx-auto w-full max-w-7xl  text-center">
//         <div className="max-w-[850px] mx-auto">
//           <div className="flex justify-center gap-1 items-center ">
//             <div className="bg-[#FF8246] h-1 w-20"></div>
//             <p>Testimonials</p>
//           </div>
//           <p className="text-6xl font-semibold leading-tight ">
//             Feedback from{" "}
//             <span className="text-[#FF8246]">satisfied users </span>
//             of eventador
//           </p>

//           <p className="max-w-lg mx-auto">
//             At Eventadore, we take the stress out of event planning. From
//             intimate gatherings to grand celebrations, we bring your vision to
//             life.
//           </p>
//         </div>
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="w-full max-w-7xl"
//         >
//           <CarouselContent>
//             {Feedback.map((item, index) => (
//               <CarouselItem
//                 key={index}
//                 className="md:basis-1/2 lg:basis-1/3 p-2"
//               >
//                 <Card className="h-full border border-none">
//                   <CardContent className="flex flex-col items-center gap-4 ">
//                     <img
//                       src={item.fImg}
//                       alt={`Feedback ${index + 1}`}
//                       className="w-40 h-40 object-cover rounded-full"
//                     />
//                     <p className="text-center">
//                       {item.message || "Great experience!"}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };
// export default FeedbackSection;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Carousel";
import Feed1 from "../../assets/feedback/feed1.png";
import Feed2 from "../../assets/feedback/feed2.png";
import Feed3 from "../../assets/feedback/feed3.png";
import Feed4 from "../../assets/feedback/feed4.png";

const Feedback = [
  {
    fImg: Feed1,
    message:
      "Eventador saved me so much time! I planned my daughter's birthday party in less than a day. I found a caterer, a DJ, and a decorator —all in one app. Everything ran smoothly, and the vendors were superprofessional. I'll never plan another event without Eventador!",
  },
  {
    fImg: Feed2,
    message:
      "Eventador saved me so much time! I planned my daughter's birthday party in less than a day. I found a caterer, a DJ, and a decorator —all in one app. Everything ran smoothly, and the vendors were superprofessional. I'll never plan another event without Eventador!",
  },
  {
    fImg: Feed3,
    message:
      "Eventador saved me so much time! I planned my daughter's birthday party in less than a day. I found a caterer, a DJ, and a decorator —all in one app. Everything ran smoothly, and the vendors were superprofessional. I'll never plan another event without Eventador!",
  },
  {
    fImg: Feed4,
    message:
      "Eventador saved me so much time! I planned my daughter's birthday party in less than a day. I found a caterer, a DJ, and a decorator —all in one app. Everything ran smoothly, and the vendors were superprofessional. I'll never plan another event without Eventador!",
  },
  {
    fImg: Feed1,
    message:
      "Eventador saved me so much time! I planned my daughter's birthday party in less than a day. I found a caterer, a DJ, and a decorator —all in one app. Everything ran smoothly, and the vendors were superprofessional. I'll never plan another event without Eventador!",
  },
];

export default function FeedbackSection() {
  return (
    <div className="w-full py-20">
      <div className="px-12 mx-auto w-full max-w-7xl text-center">
        <div className="max-w-[850px] mx-auto">
          <div className="flex justify-center gap-1 items-center ">
            <div className="bg-[#FF8246] h-1 w-20"></div>
            <p>Testimonials</p>
          </div>

          <p className="text-6xl font-semibold leading-tight ">
            Feedback from{" "}
            <span className="text-[#FF8246]">satisfied users</span> of eventador
          </p>

          <p className="max-w-lg mx-auto">
            At Eventadore, we take the stress out of event planning. From
            intimate gatherings to grand celebrations, we bring your vision to
            life.
          </p>
        </div>

        {/* Avatar Carousel */}
        <Carousel
          opts={{ align: "center" }}
          className="w-full max-w-xl mx-auto mt-10"
        >
          <CarouselContent className="flex justify-center items-center ">
            {Feedback.map((item, index) => (
              <CarouselItem key={index}>
                <div className="basis-1/5 flex justify-center">
                  <img
                    src={item.fImg}
                    alt="avatar"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <img
                    src={item.fImg}
                    alt="avatar"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="mt-8 max-w-2xl mx-auto text-center">
                  <div className="flex justify-center gap-1 mb-4 text-[#FF8246] text-2xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-lg italic max-w-xl mx-auto">
                    {item.message || "Great experience!"}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-10  active:bg-[#FF8246] p-1 cursor-pointer" />
          <CarouselNext className="-right-10 active:bg-[#FF8246] p-1 cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
}
