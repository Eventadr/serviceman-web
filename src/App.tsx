/** @format */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
// import phoneFrame from "./assets/photo_2025-08-16_12-28-08.jpg";
// import appScreenshot from "./assets/photo_2025-08-16_12-28-08.jpg";
import logo from "./assets/Untitled design.jpg";
import eventImage1 from "./assets/african-wedding.png";
import eventImage2 from "./assets/camera.png";
import eventImage3 from "./assets/food.png";
import vendorApp from "./assets/photo_2025-08-16_12-28-08.jpg";
import userApp from "./assets/photo_2025-08-16_12-28-08.jpg";
import HeroSection from "./components/HeroSection";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import JoinSection from "./components/Joinsection";
import ExperienceSection from "./components/Experiencesection";
import CelebrateSection from "./components/Celebratesection";
import FeatureSection from "./components/Featuresection";
import FeatureEvent from "./components/Feature";
import FeedbackSection from "./components/Feedback";

// Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Planner",
    text: "Eventador cut my planning time by 60%. The vendor coordination is seamless!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tech Conference Organizer",
    text: "From venue to catering, everything was handled perfectly. Our attendees loved it!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Corporate Event Manager",
    text: "The real-time tracking feature saved us during a last-minute venue change. Lifesaver!",
    rating: 4,
  },
];

const goals = [
  {
    icon: "🎯",
    title: "Democratize Excellence",
    description: "Make premium event services accessible to anyone.",
    bgColor: "bg-blue-100",
  },
  {
    icon: "✅",
    title: "Eliminate Uncertainty",
    description: "Guarantee seamless execution, every time.",
    bgColor: "bg-green-100",
  },
  {
    icon: "🤝",
    title: "Fuel Collaboration",
    description: "Connect visionary hosts with exceptional partners.",
    bgColor: "bg-yellow-100",
  },
];

const values = [
  {
    icon: "🔒",
    title: "Reliability",
    description: "Your event happens exactly as promised. On time. On point.",
    bgColor: "bg-purple-100",
  },
  {
    icon: "💪",
    title: "Empowerment",
    description: "Tools that make hosts feel capable, vendors feel valued.",
    bgColor: "bg-indigo-100",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description: "No hidden fees. No vague promises. Just clarity.",
    bgColor: "bg-teal-100",
  },
  {
    icon: "😊",
    title: "Joy",
    description:
      'We measure success in laughter, connections, and "wow" moments.',
    bgColor: "bg-pink-100",
  },
];

const events = [
  {
    image: eventImage1,
    title: "Tech Summit",
    category: "Conference",
    categoryColor: "bg-blue-100 text-blue-800",
    description: "1,200 attendees. 15 vendors. One seamless flow.",
    location: "San Francisco",
    details: "3 days",
  },
  {
    image: eventImage2,
    title: "Intimate Wedding",
    category: "Wedding",
    categoryColor: "bg-pink-100 text-pink-800",
    description: "From floral sketches to last dance – flawless.",
    location: "Napa Valley",
    details: "120 guests",
  },
  {
    image: eventImage3,
    title: "Community Meetup",
    category: "Networking",
    categoryColor: "bg-green-100 text-green-800",
    description: "Local bites, global connections. Zero stress.",
    location: "Brooklyn",
    details: "250+ attendees",
  },
];

// Components
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState("host");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Navbar logo={logo} scrolled={scrolled} />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section>
        <HeroSection />
        <JoinSection />
        <ExperienceSection />
        <CelebrateSection />
        <FeatureSection />
        <FeatureEvent />
        <FeedbackSection />
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800/60 mt-16 pt-12 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        <p className="text-slate-400 font-light text-lg">
          © 2024 Eventador. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="text-slate-400 hover:text-amber-200 transition-colors duration-300 font-light text-lg"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
