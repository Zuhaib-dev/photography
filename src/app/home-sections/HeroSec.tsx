"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import MarqueeSec from "@/components/MarqueeSec";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const HeroSec = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Content */}
        <div className="container max-lg:my-10 grid lg:grid-cols-3 lg:items-center lg:justify-between">
          {/* Title */}
          <div className="">
            <motion.p variants={fadeInUp} className="subtitle">
              Stunning Photography by
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-[40px] sm:text-5xl md;text-6xl font-semibold"
            >
              Damien Braun
            </motion.h1>
          </div>

          {/* Shape */}
          <div className="max-lg:hidden">
            <Image
              src="/images/shape-1.svg"
              alt="shape"
              width={346}
              height={346}
            />
          </div>

          {/* Title 2 */}
          <motion.div variants={fadeInUp}>
            <Button label="Let's" />
            <h2>Work Together</h2>
          </motion.div>
        </div>
        {/* Marquee */}
        <MarqueeSec />
        {/* Banner */}
        <motion.figure variants={fadeInUp} className="container">
          <Image
            src="/images/hero-banner.png"
            alt="hero banner"
            width={1280}
            height={424}
            className="w-full h-full object-cover"
            priority
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default HeroSec;
