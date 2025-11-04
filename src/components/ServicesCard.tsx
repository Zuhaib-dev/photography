"use client";

import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

interface cardProps {
  label: string;
}

const ServicesCard = ({ label }: cardProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-2 mb-3 border border-neutral-800 py-6 px-5"
      >
        <Image src="/images/star-shape.svg" alt="icon" width={30} height={30} />
        <span>{label}</span>
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;
