"use client";

import React from "react";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";
import Title from "@/components/Title";

import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
const TopSec = () => {
  return (
    <>
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
              src="/images/contact-page-banner.png"
              alt="portfolio page banner"
              width={1280}
              height={712}
              className="w-full h-full object-cover rounded-[14px] lg:rounded-3xl"
            />
          </motion.figure>
          {/* Title */}
          <div className="lg:absolute lg:top-[20%] lg:bg-backgroundClr lg:px-5 lg:py-10  lg:max-w-[50%] lg:rounded-br-3xl rounded-tr-3xl">
            <Title subtitle="Contact Me" title="Get in Touch with Me" />
            <motion.p variants={fadeInUp} className="mt-6 lg:mb-[50px]">
              Step into a world of timeless photography with Damien Braun.
              Explore our range of photography services, each crafted to tell
              your unique story through captivating images. Whether it's the
              magic of portraits, the emotion of events, or the allure of
              commercial photography, we're here to bring your vision to life.
            </motion.p>
          </div>
          {/* Shape */}
          <div className="max-lg:hidden absolute top-[10%] right-0 bg-[#0a0a0a] p-5 rounded-tl-full rounded-bl-full">
            <SocialIcons />
          </div>
          {/* bg text */}
          <p className="max-lg:hidden absolute bottom-0 right-0 pr-5 pl-10 rounded-tl-3xl py-8 bg-[#0a0a0a]">
            Scroll Down to see <br /> all services
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default TopSec;
