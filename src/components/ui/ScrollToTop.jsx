"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // ✅ Use Lenis instead of window.scrollTo
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-subtle bg-secondary/80 text-accent shadow-2xl backdrop-blur transition-all duration-300 hover:border-accent/60 hover:bg-secondary/90"
        >
          <FaArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;