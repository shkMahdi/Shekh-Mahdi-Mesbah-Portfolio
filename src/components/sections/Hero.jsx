"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { Button } from "@/components/ui/Button";
import { useLenisInstance } from "@/context/LenisContext";

const PROFILE_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const social = [
  { label: "GitHub", href: "https://github.com/shkMahdi", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shekh-mahdi-mesbah",
    Icon: Linkedin,
  },
  // { label: "Twitter", href: "https://twitter.com", Icon: XIcon },
  { label: "Email", href: "mailto:mahdisheikh1624@gmail.com", Icon: Mail },
];

export default function Hero() {
  const rootRef = useRef(null);
  const lenis = useLenisInstance();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-badge", { y: 28, opacity: 0, duration: 0.55 })
        .from(
          ".hero-word",
          { y: 48, opacity: 0, duration: 0.55, stagger: 0.07 },
          "-=0.32",
        )
        .from(
          ".hero-sub",
          { y: 32, opacity: 0, duration: 0.5, stagger: 0.12 },
          "-=0.35",
        )
        .from(
          ".hero-cta",
          { y: 28, opacity: 0, duration: 0.45, stagger: 0.1 },
          "-=0.3",
        )
        .from(
          ".hero-social",
          { y: 20, opacity: 0, duration: 0.4, stagger: 0.06 },
          "-=0.25",
        )
        .from(
          ".hero-image-inner",
          { scale: 0.95, opacity: 0, duration: 0.75, ease: "power2.out" },
          "-=0.55",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollProjects = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#projects", { offset: -88 });
    else document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <div className="hero-badge inline-flex w-fit items-center rounded-full border border-accent/60 bg-secondary/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent shadow-[0_0_24px_rgba(0,255,135,0.12)] sm:text-xs">
            &lt; Web Developer /&gt;
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block overflow-hidden">
              <span className="hero-word inline-block">Shekh</span>{" "}
              <span className="hero-word inline-block">Mahdi</span>
            </span>
            <span className="mt-1 block overflow-hidden">
              <span className="hero-word inline-block">Mesbah</span>
              <span className="text-accent">.</span>
            </span>
          </h1>

          <p className="hero-sub max-w-xl text-lg text-primary md:text-xl">
            Building the web, one component at a time.
          </p>
          <p className="hero-sub max-w-xl text-sm text-muted md:text-base">
            Frontend-focused developer &amp; problem solver based in Bangladesh.
          </p>

          <div className="hero-cta flex flex-wrap gap-3">
            <Button href="/resume.pdf" download variant="primary">
              Download Resume
            </Button>
            <Button href="#projects" variant="ghost" onClick={scrollProjects}>
              View Projects
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {social.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero-social focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-subtle bg-secondary text-muted transition-colors hover:border-accent hover:text-accent"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
          {/* Frame uses aspect ratio + fill so any source PNG dimensions layout cleanly */}
          <div className="relative w-full max-w-[min(100%,380px)] sm:max-w-[420px]">
            <div
              className="pointer-events-none absolute -right-4 -top-4 h-full w-full rounded-2xl border border-accent/35"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-5 bottom-6 h-24 w-24 rounded-xl bg-accent/15"
              aria-hidden
            />
            <div className="hero-image-inner relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-subtle bg-secondary shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/20 to-accent-dark/10" />
              <Image
                src="/images/profile.jpg"
                alt="Shekh Mahdi Mesbah"
                fill
                priority
                placeholder="blur"
                blurDataURL={PROFILE_BLUR}
                sizes="(max-width: 640px) 92vw, 420px"
                className="relative z-[1] object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 rounded-full border border-subtle bg-secondary/95 px-4 py-2 text-xs font-medium text-primary shadow-lg backdrop-blur">
              <span
                className="h-2 w-2 rounded-full bg-accent animate-pulse-dot"
                aria-hidden
              />
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
