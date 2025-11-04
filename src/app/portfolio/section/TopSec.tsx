"use client";
import React from "react";
import Image from "next/image";
import Title from "@/components/Title";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";

const TopSec = () => {
  return (
    <section className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container relative"
      >
        {/* banner */}
        <motion.figure variants={fadeIn} className="mb-[30px]">
          <Image
            src="/images/portfolio-page-banner.png"
            alt="portfolio page banner"
            width={1280}
            height={712}
            className="w-full h-full object-cover rounded-[14px] lg:rounded-3xl"
          />
        </motion.figure>
        {/* Title */}
        <div className="lg:absolute lg:top-0 lg:left-0 lg:bg-[#0a0a0a] lg:p-5 lg:rounded-br-3xl lg:max-w-[75%]">
          <Title subtitle="Portfolio" title="Visual Poetry in Pixels" />
          <motion.p variants={fadeInUp} className="mt-6 lg:mb-[50px]">
            Step into a visual journey that encapsulates the essence of my lens.
            Each photograph in this portfolio is a narrative, a frozen moment in
            time, and a testament to the artistry and passion poured into every
            frame. Explore the diverse tapestry of stories I've had the
            privilege to capture and witness the world through my lens.
          </motion.p>
        </div>
        {/* Shape */}
        <div className="max-lg:hidden absolute bottom-0 left-0 bg-[#0a0a0a] p-5 rounded-tr-3xl">
          <Image
            src="/images/page-banner-shape.svg"
            alt="shape"
            width={100}
            height={100}
          />
        </div>
        {/* bg text */}
        <p className="max-lg:hidden absolute bottom-0 right-0 pr-5 pl-10 rounded-tl-3xl py-8 bg-[#0a0a0a]">
          Scroll Down to see <br /> all services
        </p>
      </motion.div>
    </section>
  );
};

export default TopSec;
