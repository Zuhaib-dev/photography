"use client";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex items-center gap-2.5 max-w-max">
      <span className="flex items-center flex-wrap gap-2 text-xl font-medium">{label}</span>
      <motion.span
        className="bg-purple-600 w-20 h-12 flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <RiArrowRightUpLongLine size={26} />
      </motion.span>
    </button>
  );
};

export default Button;
