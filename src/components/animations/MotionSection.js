"use client";

import { fadeLeft, fadeUp, staggerContainer } from "@/lib/animation";
import { motion } from "framer-motion";

export function MotionSection({ children, className = "" }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({ children, className = "" }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function MotionLeftItem({ children, className = "" }) {
  return (
    <motion.div variants={fadeLeft} className={className}>
      {children}
    </motion.div>
  );
}
