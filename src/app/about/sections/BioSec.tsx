"use client";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

import React from "react";

const BioSec = () => {
  return (
    <section className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp}>My Biography</motion.h2>
        <motion.p variants={fadeInUp} className="mt-[30px]">
          Damien Braun's love affair with photography began at a young age,
          nurtured by the captivating landscapes and vibrant cultures
          surrounding her in the heart of the USA. Her passion for storytelling
          through imagery led her to embark on a photography journey that has
          spanned over 15 years. Driven by an insatiable curiosity to explore
          the beauty in everyday moments, Damien has honed her craft
          meticulously. Her background in digital media provided her with a
          solid foundation, but it's her keen eye for detail and an innate
          ability to capture raw emotions that truly set her apart. Damien's
          journey is more than just taking pictures; it's about capturing the
          essence of the human spirit, the fleeting magic of nature, and the
          emotions that define our lives. With each click of her camera, she
          weaves stories that transcend time and space.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BioSec;
