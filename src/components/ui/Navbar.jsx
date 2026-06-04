"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenisInstance } from "@/context/LenisContext";
import { Button } from "./Button";
import Image from "next/image";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const lenis = useLenisInstance();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToHash = (hash) => {
    if (lenis) {
      lenis.scrollTo(hash, { offset: -88 });
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSectionNav = (e, hash) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      scrollToHash(hash);
    }
  };

  const onLogoClick = (e) => {
    if (isHome && lenis) {
      e.preventDefault();
      lenis.scrollTo(0, { immediate: false });
    }
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
        animate={{
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.82)" : "rgba(10, 10, 10, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderColor: scrolled ? "rgba(30, 30, 30, 0.9)" : "rgba(30, 30, 30, 0)",
        }}
        transition={{ duration: 0.35 }}
      >
        <nav
          className="mx-auto flex w-full items-center justify-between px-4 py-4 md:px-6"
          aria-label="Primary"
        >
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              onClick={onLogoClick}
              className="font-display text-2xl font-extrabold text-accent focus-ring rounded-md"
            >
              <Image src="/images/logo.png" alt="logo" width={100} height={100} style={{ height: "auto" }} />
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const hash = `#${l.id}`;
              return (
                <Link
                  key={l.id}
                  href={`/${hash}`}
                  onClick={(e) => onSectionNav(e, hash)}
                  className="group relative text-sm font-medium text-muted transition-colors hover:text-primary focus-ring rounded-sm"
                >
                  <span>{l.label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Button
              href="/#contact"
              variant="primary"
              className="hidden !py-2 !text-xs md:flex md:!text-sm"
              onClick={(e) => onSectionNav(e, "#contact")}
            >
              Hire Me
            </Button>

            <button
              type="button"
              className="focus-ring inline-flex rounded-md p-2 text-primary md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-primary md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex h-full flex-col gap-6 px-6 pb-10 pt-24">
              {links.map((l) => {
                const hash = `#${l.id}`;
                return (
                  <Link
                    key={l.id}
                    href={`/${hash}`}
                    className="font-display text-3xl font-bold text-primary focus-ring rounded-md"
                    onClick={(e) => onSectionNav(e, hash)}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Button
                href="/#contact"
                variant="primary"
                className="mt-4 w-full"
                onClick={(e) => onSectionNav(e, "#contact")}
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
