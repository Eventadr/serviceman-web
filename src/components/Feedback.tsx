/** @format */

const FeedbackSection = () => {
  return (
    <div className="w-full py-20">
      <div className="px-12 mx-auto w-full max-w-7xl  text-center">
        <div className="max-w-[850px] mx-auto">
          <div className="flex justify-center gap-1 items-center ">
            <div className="bg-[#FF8246] h-1 w-20"></div>
            <p>Testimonials</p>
          </div>
          <p className="text-6xl font-semibold leading-tight ">
            Feedback from{" "}
            <span className="text-[#FF8246]">satisfied users </span>
            of eventador
          </p>

          <p className="max-w-lg mx-auto">
            At Eventadore, we take the stress out of event planning. From
            intimate gatherings to grand celebrations, we bring your vision to
            life.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FeedbackSection;
