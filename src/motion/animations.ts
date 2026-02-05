import { Variants } from "framer-motion";

// Stagger container: controls the timing of child animations by delaying each one.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // Reduced from 0.4 for faster, smoother sequencing
      delayChildren: 0.1,
    },
  },
};

// Buttery smooth fade in up with spring physics
export const fadeInUp: Variants = {
  hidden: { y: 40, opacity: 0, filter: "blur(8px)", scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
      opacity: { duration: 0.4 },
      filter: { duration: 0.5 },
    },
  },
};

// Smooth fade in with spring
export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)", scale: 0.98 },
  show: {
    opacity: 1,
    filter: "blur(0)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.6,
      opacity: { duration: 0.4 },
      filter: { duration: 0.5 },
    },
  },
};

// Scale up animation for images and cards
export const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
