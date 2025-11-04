"use client";
import { RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animations";

interface titleProps {
  subtitle?: string;
  title: string;
  link?: string;
}

const Title = ({ subtitle, title, link }: titleProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-7">
      <div>
        <motion.p variants={fadeInUp} className="subtitle">
          {subtitle}
        </motion.p>
        <motion.h2 variants={fadeInUp}>{title}</motion.h2>
      </div>

      {link && (
        <motion.button variants={fadeInUp}>
          <Link href="#" className="primary-btn flex items-center gap-2">
            {link}
            <span>
              <RiArrowRightLongLine size={20} />
            </span>
          </Link>
        </motion.button>
      )}
    </div>
  );
};

export default Title;
