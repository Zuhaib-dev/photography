"use client";
import React from "react";
import Title from "@/components/Title";
import { countUpItems } from "@/data/data";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";

const TopSec = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title subtitle="About" title="About damien braun" />

        {/* Count up card wrapper */}
        <div className="py-20" ref={ref}>
          <div className="grid gap-[10px] grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {countUpItems.map((item) => (
              // Card
              <motion.div
                variants={fadeInUp}
                className="bg-neutral-900 px-[14px] text-center py-5 rounded-xl"
                key={item.id}
              >
                {inView && (
                  <>
                    <h3 className="text-3xl lg:text-4xl font-semibold">
                      <CountUp end={item.value} duration={2} />
                      {item.id === 6 ? "%" : "+"}
                    </h3>
                  </>
                )}

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <motion.figure variants={fadeIn}>
          <Image
            src="/images/about-page-banner.png"
            alt="About page banner"
            width={1279}
            height={560}
            className="w-full h-full object-cover"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default TopSec;
