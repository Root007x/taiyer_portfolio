"use client";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { ReactNode } from "react"; // Added React import for React.CSSProperties

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none"; // Added "down"
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

export function SectionReveal({ children, delay = 0, direction = "up", className = "", style }: Props) { // Added style to destructuring
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const initial =
    direction === "up"    ? { opacity: 0, y: 40 }  :
    direction === "down"  ? { opacity: 0, y: -40 } : // Added "down" direction
    direction === "left"  ? { opacity: 0, x: -40 } :
    direction === "right" ? { opacity: 0, x: 40 }  :
                            { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }} // Changed duration to 0.8
      style={style} // Added style prop
    >
      {children}
    </motion.div>
  );
}
