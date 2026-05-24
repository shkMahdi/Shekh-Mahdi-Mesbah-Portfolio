"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const PER_PAGE = 3;

export default function Projects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const paginated = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handlePage(next) {
    setPage(next);
    // scroll back to section top smoothly
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <SectionWrapper
      id="projects"
      className="border-t border-subtle/60 bg-primary px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          04 — Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
          Selected work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {paginated.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePage(page - 1)}
              disabled={page === 1}
              className="rounded-lg border border-subtle px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => handlePage(p)}
                className={`h-9 w-9 rounded-lg border text-sm transition-colors ${
                  p === page
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-subtle text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => handlePage(page + 1)}
              disabled={page === totalPages}
              className="rounded-lg border border-subtle px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
