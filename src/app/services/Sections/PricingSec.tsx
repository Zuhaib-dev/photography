"use client";
import React from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

interface secProps {
  subtitle: string;
  price: number | string;
}

const PricingSec = ({ subtitle, price }: secProps) => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div>
          <motion.p variants={fadeInUp} className="subtitle">
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center max-lg:justify-between gap-2 mt-1"
          >
            <h3 className="text-5xl">$ {price}</h3>
            {/* Link */}
            <div className="flex items-center border-b border-neutral-800 hover:border-neutral-400 transition">
              <Link href="#" className="mb-2">
                Book a Call
              </Link>
              <span>
                <RiArrowRightUpLine />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSec;
