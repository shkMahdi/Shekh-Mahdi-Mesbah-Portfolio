"use client";

import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-ring";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  download,
  type = "button",
  onClick,
  ...rest
}) {
  const variants = {
    primary: "bg-accent text-[#0a0a0a] hover:bg-accent-dark",
    ghost:
      "border border-accent bg-transparent text-primary hover:bg-accent/10 hover:text-accent",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...rest}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...rest}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
