"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: React.CSSProperties | undefined;
}

export function GlassCard({ children, className = "", hover = true, glow = false, style }: Props) {
  return (
    <motion.div
      className={`glass rounded-sm p-6 ${glow ? "glow-gold" : ""} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
