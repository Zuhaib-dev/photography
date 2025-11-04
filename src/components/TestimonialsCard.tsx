"use client";

import React from "react";
import Title from "./Title";
import Divider from "./Divider";
import { testimonialItems } from "@/data/data";
import SocialIcons from "./SocialIcons";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

//import swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialsCard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container"
    >
      {/* Title */}
      <div>
        <Title
          subtitle="Testimonials"
          title="What My Clients Say"
          link="View All Testimonials"
        />
        <motion.div variants={fadeInUp} className="mt-5">
          <p>Total Reviews</p>
          <h3 className="text-2xl font-semibold">323</h3>
        </motion.div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Slides */}
      <motion.div variants={fadeInUp}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
        >
          {testimonialItems.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Card */}
              <div className="bg-neutral-900 p-10 rounded-[10px] border border-neutral-800 flex flex-col gap-5 aspect-video">
                {/* Card title */}
                <div className=" flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.location}</p>
                  </div>
                  {/* Social Icons */}
                  <SocialIcons />
                </div>

                {/* stars */}
                <div className="flex text-yellow-500 gap-2 items-center">
                  <RiStarFill size={22} />
                  <RiStarFill size={22} />
                  <RiStarFill size={22} />
                  <RiStarFill size={22} />
                  <RiStarFill size={22} />
                </div>

                {/* text */}
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* Slider buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center flex-wrap gap-2 border border-neutral-800 max-w-max p-3 rounded-full mt-10"
      >
        <button className="prev-btn w-11 h-11 bg-neutral-800 max-w-max flex items-center justify-center aspect-square rounded-full hover:bg-neutral-700 transition-colors">
          <RiArrowLeftSLine size={30} />
        </button>

        <button className="next-btn w-11 h-11 bg-neutral-800 max-w-max flex items-center justify-center aspect-square rounded-full hover:bg-neutral-700 transition-colors">
          <RiArrowRightSLine size={30} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsCard;
