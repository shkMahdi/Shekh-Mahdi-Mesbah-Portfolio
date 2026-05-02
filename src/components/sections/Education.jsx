"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const entries = [
  {
    title: "Higher Secondary School Certificate (HSC)",
    institution: "The Buds Residential Model School and College",
    years: "2020",
    description:
      "Completed higher secondary studies with a focus on science and analytical thinking.",
  },
  {
    title: "B.Sc in Software Engineering",
    institution: "Metropolitan University, Sylhet",
    years: "2023 — Present",
    extra: "Expected graduation: December 2026",
    description:
      "Currently studying core software engineering principles, data structures, and modern web technologies.",
  },
];

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="border-t border-subtle/60 bg-primary px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          03 — Education
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
          Learning path
        </h2>

        <div className="relative mt-14 space-y-10 md:space-y-12">
          <div
            className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-subtle md:left-[9px]"
            aria-hidden
          />
          {entries.map((e, i) => (
            <motion.article
              key={e.title}
              className="relative grid gap-4 pl-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 md:pl-12"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-primary md:top-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div>
                <p className="font-mono text-xs text-accent">{e.years}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-primary md:text-2xl">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{e.institution}</p>
                {e.extra ? (
                  <p className="mt-1 text-sm text-muted">{e.extra}</p>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {e.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
