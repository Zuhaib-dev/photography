"use client";

import Divider from "@/components/Divider";
import NavigationBtns from "@/components/NavigationBtns";
import PortfolioCard from "@/components/PortfolioCard";
import Title from "@/components/Title";
import { portfolioCardItems } from "@/data/data";
import React from "react";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const PortfolioSec = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Card wrapper */}
        <div>
          {portfolioCardItems.map((group) => {
            const prevClass = `prev-btn${group.id}`;
            const nextClass = `next-btn${group.id}`;
            return (
              <div className="mt-15" key={group.id}>
                {/* Divider */}
                <Divider />
                {/* title */}
                <div className="flex items-center justify-between flex-wrap gap-4 mt-[70px] mb-10">
                  <Title title={group.title} />
                  {/* Navigation btns */}
                  <NavigationBtns
                    prevClassName={prevClass}
                    nextClassName={nextClass}
                  />
                </div>
                {/* swiper  */}
                <Swiper
                  modules={[Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 2.5,
                    },
                    1024: {
                      slidesPerView: 3.5,
                    },
                  }}
                  navigation={{
                    prevEl: `.${prevClass}`,
                    nextEl: `.${nextClass}`,
                  }}
                  spaceBetween={30}
                >
                  {group.items.map((card) => (
                    // Card
                    <SwiperSlide className="">
                      <PortfolioCard
                        key={card.id}
                        img={card.imgUrl}
                        title={card.title}
                        date={card.date}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSec;
