/** @format */

import HeroSection from "./About-us/herosection";
import Mission from "./About-us/mission";
import ServicesTwo from "./About-us/nextServe";
import Services from "./About-us/services";
import TeamSection from "./About-us/team";
import Values from "./About-us/values";

const AboutUs = () => {
  return (
    <section id="about">
      <HeroSection />
      <Mission />
      <Values />
      <Services />
      <ServicesTwo />
      <TeamSection />
    </section>
  );
};
export default AboutUs;
