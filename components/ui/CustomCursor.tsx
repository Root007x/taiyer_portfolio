"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      
      const target = e.target as HTMLElement;
      const isHoverable = !!target?.closest("a, button, [data-cursor-hover]");
      if (isHoverable) {
        circle.classList.add("hovering");
      } else {
        circle.classList.remove("hovering");
      }
    };

    const loop = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      
      const isHovering = circle.classList.contains("hovering");
      const size = isHovering ? 60 : 40;
      circle.style.transform = `translate3d(${circleX - size / 2}px, ${circleY - size / 2}px, 0)`;
      
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ position: "fixed", top: 0, left: 0, willChange: "transform" }} />
      <div ref={circleRef} className="cursor-circle" style={{ position: "fixed", top: 0, left: 0, willChange: "transform" }} />
    </>
  );
}
