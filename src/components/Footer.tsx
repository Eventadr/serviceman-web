/** @format */
import Appstore from "../assets/appstore.png";
import Playstore from "../assets/playstore.png";
import Insta from "../assets/icons/instagram.png";
import Tik from "../assets/icons/tiktok.png";
import Twit from "../assets/icons/twitter.png";
const FooterSection = () => {
  return (
    <div className="w-full bg-black text-white mt-20 pt-20 pb-10">
      <div className="bg-[#FF8246] w-[90%] max-w-5xl mx-auto rounded-xl py-10 text-center text-white -mt-32 shadow-lg">
        <p className="text-lg">Bring Your Dream Event to Life</p>
        <h2 className="text-4xl font-bold mt-2">Get the App Now</h2>
        <p className="mt-2 max-w-md mx-auto">
          Plan events, book vendors, and manage everything, all from your phone.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <div className="flex justify-between w-[502px]">
            <img src={Appstore} alt="appstore-img" />
            <img src={Playstore} alt="playstore-img" />
          </div>
        </div>
      </div>

      <div className="mt-20 w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="w-4 h-4 rounded-full bg-[#FF8246]"></div>
            Eventador
          </div>
          <div className="flex gap-4 mt-4 text-gray-300">
            <img src={Insta} alt="insta" className="w-4 h-4" />
            <img src={Tik} alt="tik" className="w-4 h-4" />
            <img src={Twit} alt="twit" className="w-4 h-4" />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <a
            href="mailto:eventador@gmail.com"
            className="text-sm text-gray-300 _blank"
            target="_blank"
          >
            eventador@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=University+farm+road+189+street"
            className="text-sm text-gray-300 mt-1"
            target="_blank"
          >
            University farm road 189 street
          </a>
          <a
            href="tel:+233504706443"
            className="text-sm text-gray-300 mt-1"
            target="_blank"
          >
            +233 504706443
          </a>
        </div>

        <div>
          <h3 className="font-semibold mb-3">SUBSCRIBE</h3>
          <p className="text-sm text-gray-300 mb-3">
            Enter your email to get notified about our new solutions
          </p>

          <div className="flex bg-white rounded-md overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="email"
              className="w-full px-3 py-2 text-black outline-none"
            />
            <button className="bg-[#FF8246] text-white px-4 cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto border-t border-gray-700 mt-10 pt-6 flex justify-between text-xs text-gray-500">
        <p>Copyright © 2025 eventador. All Rights Reserved</p>
        <p>User terms and conditions apply | Privacy Policy</p>
      </div>
    </div>
  );
};
export default FooterSection;
