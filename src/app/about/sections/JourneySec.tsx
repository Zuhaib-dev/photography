"use client";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";

import Title from "@/components/Title";
import { journeyItems } from "@/data/data";
import React from "react";

const JourneySec = () => {
  return (
    <section className="pt-40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title subtitle="Journey" title="Damien's Journey - A Timeline" />

        {/* Card wrapper */}
        <div className="grid gap-5 mt-20 md:grid-cols-2">
          {journeyItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="bg-neutral-900 p-10 text-neutral-400"
              key={item.id}
            >
              <h4 className="text-2xl md:text-3xl uppercase font-semibold mb-3">
                {item.title}
              </h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default JourneySec;
