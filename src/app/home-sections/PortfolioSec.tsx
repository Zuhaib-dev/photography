"use client";
import React from "react";
import Title from "@/components/Title";
import { portfolioSectionItems } from "@/data/data";
import PortfolioCard from "@/components/PortfolioCard";

//import motion
import { motion } from "motion/react";
import { staggerContainer } from "@/motion/animations";

const PortfolioSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Portfolio"
          subtitle="Explore My photography work."
          link="View All Works"
        />

        {/* Card wrapper */}
        <div className="grid gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {portfolioSectionItems.map((item) => (
            //   Card
            <PortfolioCard
              key={item.id}
              img={item.imgUrl}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSec;
