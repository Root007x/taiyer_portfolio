"use client";
import { useCounter } from "@/hooks/useCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Props {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", className = "", duration = 2000 }: Props) {
  const { ref, isVisible } = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.5 });
  const count = useCounter(value, duration, isVisible);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
