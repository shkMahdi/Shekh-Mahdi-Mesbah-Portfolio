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
          className="fixed bottom-6 right-6 z-50 bg-[#244D3F] text-white p-4 rounded-full shadow-xl"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;