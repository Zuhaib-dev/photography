"use client";
import React from "react";
import MarqueeSec from "./MarqueeSec";
import Button from "./Button";
import { footerList } from "@/data/data";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const Footer = () => {
  return (
    <footer>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* footer lg text */}
        <motion.div variants={fadeInUp} className="container block">
          <div className="text-[64px] uppercase flex justify-end text-neutral-800 font-semibold sm:text-[100px] md:text-[160px] lg:text-[200px]">
            <h1>Demien</h1>
          </div>
        </motion.div>
        {/* Marquee */}
        <MarqueeSec />
        {/* footer top */}
        <div className="container py-24 grid gap-10 border-x border-neutral-800 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_0.5fr]">
          {/* wrapper */}
          <motion.div variants={fadeInUp}>
            <p className="subtitle">A more meaningful home for photography</p>
            {/* button */}
            <Button label="Let's" />
            <h2>Work Together</h2>
          </motion.div>

          {/* Footer list */}
          {footerList.map((item) => (
            <motion.div variants={fadeInUp} key={item.id}>
              <p className="font-semibold text-xl text-white">{item.title}</p>
              {/* list */}
              <ul className="grid mt-5 gap-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* footer bottom */}
        <div className="border-t border-neutral-900">
          <div className="container py-6">
            {/* Links */}
            <motion.div variants={fadeInUp} className="flex gap-4 mb-7">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </motion.div>
            {/* wrapper */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center flex-wrap gap-3 justify-between"
            >
              {/* social icons */}
              <SocialIcons />
              {/* copy right info */}
              <p>
                &copy; {new Date().getFullYear()} Damien Braun Photography. All
                rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
