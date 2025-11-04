"use client";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animations";

interface btnProps {
  prevClassName: string;
  nextClassName: string;
}

const NavigationBtns = ({ prevClassName, nextClassName }: btnProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex border border-neutral-800 max-w-max p-2 rounded-full items-center gap-3"
    >
      <button
        className={`${prevClassName} w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center aspect-square hover:bg-neutral-700 transition-colors`}
      >
        <RiArrowLeftSLine />
      </button>
      <button
        className={`${nextClassName} w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center aspect-square hover:bg-neutral-700 transition-colors`}
      >
        <RiArrowRightSLine />
      </button>
    </motion.div>
  );
};

export default NavigationBtns;
