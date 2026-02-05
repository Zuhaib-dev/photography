"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animations";

interface cardProps {
  img: string;
  title: string;
  date: string;
}

const PortfolioCard = ({ img, title, date }: cardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group"
    >
      {/* card image */}
      <figure className="mb-5 overflow-hidden rounded-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Image
            src={img}
            alt={`${title} - Photography project from ${date}`}
            width={499}
            height={519}
            className="rounded-4xl w-full h-full object-center"
          />
        </motion.div>
      </figure>
      {/* card content */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div>
          <h4 className="text-xl">{title}</h4>
          <p>{date}</p>
        </div>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 uppercase hover:underline group-hover:text-purple-400 transition-colors"
        >
          View Project
          <motion.span
            whileHover={{ x: 5, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiArrowRightUpLongLine />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
