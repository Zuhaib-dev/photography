"use client";

import React, { useState } from "react";
import Title from "./Title";
import Divider from "./Divider";
import { faqItems } from "@/data/data";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const FaqSec = () => {
  const [openId, setOpenId] = useState<number | string | null>(
    faqItems[0]?.id ?? null
  );

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container"
    >
      {/* Title */}
      <Title subtitle="FAQ’s" title="Frequently Asked Questions" />

      {/* Divider */}
      <Divider />

      {/* wrapper */}
      <div className="grid lg:grid-cols-2 lg:items-start gap-4">
        {faqItems.map((item) => (
          <motion.div
            variants={fadeInUp}
            className="border border-neutral-800"
            key={item.id}
          >
            {/* Title */}
            <div className="flex items-center justify-between px-5 py-8 gap-8">
              <h3 className="text-xl uppercase">{item.title}</h3>
              <button
                className="w-[52px] h-[52px] border border-neutral-800 rounded-full flex justify-center items-center aspect-square hover:bg-neutral-700 transition-colors"
                onClick={() => handleClick(item.id)}
              >
                {openId === item.id ? (
                  <RiArrowDropDownLine size={30} />
                ) : (
                  <RiArrowDropUpLine size={30} />
                )}
              </button>
            </div>
            {/* Text */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-y-hidden max-h-0 ${
                openId === item.id ? "max-h-96" : ""
              }`}
            >
              <p className="px-5 pb-8">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FaqSec;
