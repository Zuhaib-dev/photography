"use client";
import { logoImages } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

//import motion
import { motion } from "framer-motion";
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
        className="mt-6 bg-neutral-900 border-y border-neutral-800 py-8 md:py-12"
      >
        <div className="container">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            {logoImages.map((img) => (
              <div
                key={img.id}
                className="mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
              >
                <Image
                  src={img.img}
                  height={201}
                  width={120}
                  alt={`Brand partner logo ${img.id}`}
                  className="h-16 w-auto md:h-20 lg:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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
