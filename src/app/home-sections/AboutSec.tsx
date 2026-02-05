"use client";

import Title from "@/components/Title";
import React from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

//import motion
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const AboutSec = () => {
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
        <Title subtitle="About" title="I am Zuhaib" link="Know More" />
        {/* Divider */}
        <Divider />
        {/* Wrapper */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          {/* Banner */}
          <motion.figure variants={fadeInUp}>
            <Image
              src="/images/about-section-banner.png"
              alt="about banner"
              width={783}
              height={710}
            />
          </motion.figure>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            className="border border-neutral-900 p-6 rounded-2xl mt-5"
          >
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Introduction
              </h3>
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <div className="grid gap-5 mt-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Contact Information
              </h3>

              {/* wrapper */}
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
                {/* email address */}
                <div>
                  <p>Email</p>
                  <a
                    href="mailto:Zuhaibbraun@gmail.com"
                    className="hover:underline"
                  >
                    zuhaibrashid01@gmail.com
                  </a>
                </div>
                {/* Phone num */}
                <div>
                  <p>Phone Number</p>
                  <a href="tel:+00 000000000" className="hover:underline">
                    +91 6006414088
                  </a>
                </div>
              </div>

              {/* wrapper */}
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between flex-wrap">
                {/* Social icons */}
                <SocialIcons />

                {/* buttons Wrapper */}
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="primary-btn w-full text-center">
                    Let’s Work
                  </Link>
                  <Link href="#" className="primary-btn w-full  text-center">
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSec;
