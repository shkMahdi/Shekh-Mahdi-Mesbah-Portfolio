"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const entries = [
  {
    title: "B.Sc in Software Engineering",
    institution: "Metropolitan University, Sylhet",
    years: "2023 — Present",
    extra: "Expected graduation: December 2026",
    department: "Software Engineering",
    grade: "CGPA: 3.84 / 4.00 (up to 8th semester)",
  },
  {
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Sreemangal Government College",
    years: "2020",
    department: "Science",
    grade: "GPA: 5.00 / 5.00",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "The Buds Residential Model School & College",
    years: "2018",
    department: "Science",
    grade: "GPA: 5.00 / 5.00",
  },
];

function EntryCard({ entry }) {
  return (
    <div className="rounded-2xl border border-subtle bg-secondary/70 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.35)] md:p-6">
      <p className="font-mono text-xs text-accent">{entry.years}</p>
      <h3 className="mt-2 font-display text-lg font-semibold text-primary md:text-xl">
        {entry.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted">{entry.institution}</p>
      {entry.extra && (
        <p className="mt-1 text-xs text-muted/70">{entry.extra}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-subtle bg-primary/60 px-3 py-1 text-xs text-muted">
          {entry.department}
        </span>
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
          {entry.grade}
        </span>
      </div>
    </div>
  );
}

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

        {/* Mobile: simple stacked list */}
        <div className="relative mt-14 space-y-10 md:hidden">
          <div
            className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-subtle"
            aria-hidden
          />
          {entries.map((e, i) => (
            <motion.article
              key={e.title}
              className="relative pl-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-0 top-3 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-primary">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <EntryCard entry={e} />
            </motion.article>
          ))}
        </div>

        {/* Desktop: alternating timeline */}
        <div className="relative mt-14 hidden md:block">
          {/* Center vertical line */}
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-subtle"
            aria-hidden
          />

          <div className="space-y-16">
            {entries.map((e, i) => {
              const isRight = i % 2 === 0; // 0→right, 1→left, 2→right
              return (
                <motion.div
                  key={e.title}
                  className="relative grid grid-cols-2 gap-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Dot on the center line */}
                  <div className="absolute left-1/2 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-primary">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>

                  {isRight ? (
                    <>
                      {/* Left side: empty */}
                      <div />
                      {/* Right side: card */}
                      <div className="pl-10 pr-0">
                        <EntryCard entry={e} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left side: card */}
                      <div className="pl-0 pr-10">
                        <EntryCard entry={e} />
                      </div>
                      {/* Right side: empty */}
                      <div />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
