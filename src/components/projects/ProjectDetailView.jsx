"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ProjectDetailView({ project }) {
  return (
    <motion.div
      className="min-h-screen bg-primary px-4 pb-24 pt-28 md:px-6 md:pt-32"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="focus-ring inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back to Portfolio
        </Link>

        <header className="mt-10">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-primary to-transparent" />
          </div>
          <h1 className="font-display text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted md:text-xl">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-subtle bg-secondary px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <p className="mt-10 text-sm leading-relaxed text-primary md:text-base">
          {project.description}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          <article className="rounded-2xl border border-subtle bg-secondary/70 p-6">
            <h2 className="font-display text-lg font-semibold text-accent">
              Challenges faced
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {project.challenges}
            </p>
          </article>
          <article className="rounded-2xl border border-subtle bg-secondary/70 p-6">
            <h2 className="font-display text-lg font-semibold text-accent">
              Future improvements
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {project.improvements}
            </p>
          </article>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={project.liveUrl} variant="primary" target="_blank" rel="noopener noreferrer">
            Live Demo →
          </Button>
          <Button href={project.githubUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
            GitHub Repo →
          </Button>
          {
           project.server && (<Button href={project.server} variant="ghost" target="_blank" rel="noopener noreferrer">
              Sever Repo →
            </Button>)
          }
        </div>
      </div>
    </motion.div>
  );
}
