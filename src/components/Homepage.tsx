/** @format */

import CelebrateSection from "./Homepage/Celebratesection";
import ExperienceSection from "./Homepage/Experiencesection";
import FeatureEvent from "./Homepage/Feature";
import FeatureSection from "./Homepage/Featuresection";
import FeedbackSection from "./Homepage/Feedback";
import HeroSection from "./Homepage/HeroSection";
import JoinSection from "./Homepage/Joinsection";

const Homepage = () => {
  return (
    <section id="home">
      <HeroSection />
      <JoinSection />
      <ExperienceSection />
      <CelebrateSection />
      <FeatureSection />
      <FeatureEvent />
      <FeedbackSection />
    </section>
  );
};
export default Homepage;
