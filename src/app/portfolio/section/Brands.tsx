"use client";
import { logoImages } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";

const Brands = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mt-40"
    >
      <motion.p variants={fadeInUp} className="subtitle">
        BRANDS I HAVE WORKED WITH
      </motion.p>
      {/* wrapper */}
      <motion.div
        variants={fadeIn}
        className="mt-6 bg-neutral-900 border-y border-neutral-800"
      >
        <div className="container">
          <Marquee>
            {logoImages.map((img) => (
              <div key={img.id}>
                <Image
                  src={img.img}
                  height={201}
                  width={40}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Brands;
