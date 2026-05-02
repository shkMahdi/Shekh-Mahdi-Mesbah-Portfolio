"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group focus-ring block h-full rounded-xl outline-none"
    >
      <motion.article
        layout
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.45,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-subtle bg-secondary shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
        whileHover={{ y: -6, borderColor: "rgba(0, 255, 135, 0.55)" }}
      >
        <div
          className={`relative aspect-video w-full bg-gradient-to-br ${project.gradient} opacity-90`}
          aria-hidden
        />
        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-subtle px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted">{project.tagline}</p>
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
