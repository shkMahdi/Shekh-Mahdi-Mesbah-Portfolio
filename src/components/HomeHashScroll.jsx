"use client";

import { useEffect } from "react";
import { useLenisInstance } from "@/context/LenisContext";

export default function HomeHashScroll() {
  const lenis = useLenisInstance();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || !lenis) return;
    requestAnimationFrame(() => {
      lenis.scrollTo(hash, { offset: -88 });
    });
  }, [lenis]);

  return null;
}
