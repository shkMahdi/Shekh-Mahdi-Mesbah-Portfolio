"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
  className = "",
  id,
  as: Component = "section",
}) {
  return (
    <Component
      id={id}
      className={`scroll-mt-24 md:scroll-mt-28 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
