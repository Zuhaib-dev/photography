"use client";

import { RiArrowRightUpLongLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

interface sectionProps {
  title: string;
  description: string;
  image: string;
}

const ServicesIntroSec = ({ title, description, image }: sectionProps) => {
  return (
    <section className="mt-40 mb-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 lg:grid-cols-2 lg:items-center"
      >
        {/* content */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <h2 className="mb-10 text-neutral-500">{title}</h2>
          <p>{description}</p>
          {/* link */}
          <div className="flex items-center mt-8 gap-2">
            <Link href="#" className="hover:underline">
              View Project
            </Link>
            <span>
              <RiArrowRightUpLongLine />
            </span>
          </div>
        </motion.div>
        {/* banner */}
        <motion.figure variants={fadeInUp}>
          <Image
            src={image}
            width={718}
            height={311}
            alt="services banner"
            className="w-full h-fll object-cover"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default ServicesIntroSec;
