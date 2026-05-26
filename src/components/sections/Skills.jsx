"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { skills } from "@/data/skills";

const categories = Object.entries(skills);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="border-t border-subtle/60 bg-primary px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          02 — Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
          Tools I reach for
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {categories.map(([category, list], idx) => (
            <div key={category}>
              {idx > 0 ? (
                <div
                  className="mb-8 h-px w-full bg-subtle md:hidden"
                  aria-hidden
                />
              ) : null}
              <h3 className="font-display text-lg font-semibold text-primary">
                {category}
              </h3>
              <motion.ul
                className="mt-5 flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {list.map((skill) => (
                  <motion.li key={skill} variants={item}>
                    <motion.span
                      className="inline-flex cursor-default rounded-full border border-subtle bg-secondary/60 px-3 py-1.5 text-xs text-muted md:text-sm"
                      whileHover={{
                        scale: 1.04,
                        borderColor: "rgba(0, 255, 135, 0.65)",
                        color: "#00ff87",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    >
                      {skill}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
