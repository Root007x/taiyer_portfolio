"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot    = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
    };

    const loop = () => {
      circleX += (mouseX - circleX) * 0.12;
      circleY += (mouseY - circleY) * 0.12;
      const size = hovering ? 60 : 40;
      circle.style.transform = `translate(${circleX - size / 2}px, ${circleY - size / 2}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [hovering]);

  return (
    <>
      <div ref={dotRef}    className="cursor-dot" />
      <div ref={circleRef} className={`cursor-circle ${hovering ? "hovering" : ""}`} />
    </>
  );
}
