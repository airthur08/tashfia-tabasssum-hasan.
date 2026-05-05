"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  delayMs?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  as = "section",
  id,
  delayMs = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
