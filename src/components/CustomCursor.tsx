"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.display = "block";
    ring.style.display = "block";

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;
    let isHovering = false;

    // Place both at a sensible initial position (off-screen)
    gsap.set([dot, ring], { x: -100, y: -100 });

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a, button, input, label, [data-hover]");
      if (el && !isHovering) {
        isHovering = true;
        gsap.to(ring, { scale: 2.2, opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(dot, { scale: 0.4, duration: 0.2 });
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a, button, input, label, [data-hover]");
      if (el && isHovering) {
        isHovering = false;
        gsap.to(ring, { scale: 1, opacity: 0.55, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="compass-cursor-dot" ref={dotRef} style={{ display: "none" }} />
      <div id="compass-cursor-ring" ref={ringRef} style={{ display: "none" }} />
    </>
  );
}
