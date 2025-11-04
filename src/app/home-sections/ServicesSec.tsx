"use client";

import React from "react";
import Title from "@/components/Title";
import Divider from "@/components/Divider";
import Image from "next/image";
import { servicesHeightligts } from "@/data/data";
import ServicesCard from "@/components/ServicesCard";
//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const ServicesSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* title */}
        <Title
          subtitle="Services"
          title="My Photography Services"
          link="View All Services"
        />

        {/* Divider */}
        <Divider />
        {/* Wrapper */}
        <div className="grid gap-[50px] lg:grid-cols-2">
          {/* Banner */}
          <motion.figure variants={fadeInUp} className="lg:order-1">
            <Image
              src="/images/services-section-banner.png"
              alt="banner"
              width={773}
              height={625}
              className="rounded-t-xl rounded-b-4xl"
            />
          </motion.figure>
          {/* content */}
          <motion.div variants={fadeInUp} className="grid gap-14">
            <div>
              <h2>Events</h2>
              <p className="my-5 max-w-[570px]">
                Our event photography service is dedicated to capturing the
                magic of your special occasions. Whether it's a wedding,
                corporate event, or milestone celebration, we're there to
                document every heartfelt moment. We blend into the background,
                ensuring natural and candid shots that reflect the emotions of
                the day.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-5 text-xl">
                Service Highlights
              </p>
              {/* card wrapper */}
              <div className="grid gap-2">
                {servicesHeightligts.map((item) => (
                  // Card
                  <ServicesCard key={item.id} label={item.label} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSec;
