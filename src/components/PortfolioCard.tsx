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
    <motion.div variants={fadeInUp}>
      {/* card image */}
      <figure className="mb-5">
        <Image
          src={img}
          alt={title}
          width={499}
          height={519}
          className="rounded-4xl w-full h-full object-center"
        />
      </figure>
      {/* card content */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div>
          <h4 className="text-xl">{title}</h4>
          <p>{date}</p>
        </div>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 uppercase hover:underline"
        >
          View Project
          <span>
            <RiArrowRightUpLongLine />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
