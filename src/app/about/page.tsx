import React from "react";
import TopSec from "./sections/TopSec";
import BioSec from "./sections/BioSec";
import JourneySec from "./sections/JourneySec";
import TestimonialsCard from "@/components/TestimonialsCard";
const About = () => {
  return (
    <>
      <TopSec />
      <BioSec />
      <JourneySec />
      <section className="mt-40">
        <TestimonialsCard />
      </section>
    </>
  );
};

export default About;
