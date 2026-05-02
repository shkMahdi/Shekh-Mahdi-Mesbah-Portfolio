"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LenisContext } from "@/context/LenisContext";

export default function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // ✅ OPTIONAL (for global access like window.lenis)
    window.lenis = instance;

    setLenis(instance);

    function raf(time) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      instance.destroy();
      setLenis(null);

      // cleanup
      if (window.lenis === instance) {
        delete window.lenis;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}