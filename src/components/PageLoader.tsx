"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Each letter of COMPASS gets its own span for stagger
const WORD = "COMPASS".split("");

export function PageLoader() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) { setDone(true); return; }

      const tl = gsap.timeline({ onComplete: () => setDone(true) });

      /* ── Phase 1: letters slide up from below ── */
      tl.fromTo(
        ".loader-letter",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.07,
        },
        0
      )
        /* ── Phase 2: sub-text fade in ── */
        .fromTo(
          ".loader-sub",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.55
        )
        /* ── Phase 3: corner meta lines ── */
        .fromTo(
          ".loader-meta",
          { opacity: 0 },
          { opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          0.7
        )
        /* ── Phase 4: progress bar fill ── */
        .fromTo(
          ".loader-bar-fill",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          0.2
        )
        /* ── Phase 5: letters scale up + fade out ── */
        .to(".loader-letter", {
          yPercent: -115,
          opacity: 0,
          duration: 0.75,
          ease: "power4.in",
          stagger: { each: 0.045, from: "center" },
        }, "+=0.15")
        /* ── Phase 6: whole screen wipes upward ── */
        .to(
          wrapRef.current,
          { yPercent: -102, duration: 0.85, ease: "power4.inOut" },
          "-=0.3"
        );
    },
    { scope: wrapRef }
  );

  if (done) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle animated radial glow behind the text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(240,199,122,0.12) 0%, transparent 70%)",
          animation: "spin-slow 18s linear infinite",
        }}
      />

      {/* ─── Top-left meta ─── */}
      <div className="absolute top-7 left-8 flex flex-col gap-1">
        <span className="loader-meta text-[11px] uppercase tracking-[1.5px] text-text-faint opacity-0">
          GDC · DesignAthon 2026
        </span>
        <span className="loader-meta text-[11px] uppercase tracking-[1.5px] text-text-faint opacity-0">
          RIT Dubai
        </span>
      </div>

      {/* ─── Top-right meta ─── */}
      <div className="absolute top-7 right-8 text-right">
        <span className="loader-meta block text-[11px] uppercase tracking-[1.5px] text-text-faint opacity-0">
          Campus Navigator
        </span>
        <span className="loader-meta block text-[11px] uppercase tracking-[1.5px] text-text-faint opacity-0 mt-1">
          Course Intel
        </span>
      </div>

      {/* ─── Main word mark ─── */}
      <div className="relative flex items-end overflow-hidden leading-none select-none">
        {WORD.map((letter, i) => (
          <span
            key={i}
            className="loader-letter inline-block font-serif opacity-0"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ─── Sub-line ─── */}
      <p
        className="loader-sub mt-5 text-[12px] uppercase tracking-[3px] text-text-faint opacity-0 text-center"
      >
        know the course · find the professor
      </p>

      {/* ─── Progress bar ─── */}
      <div className="absolute bottom-10 left-8 right-8 h-px bg-glass-border overflow-hidden">
        <div
          className="loader-bar-fill absolute inset-0 origin-left"
          style={{ background: "var(--glow)" }}
        />
      </div>

      {/* ─── Bottom-right label ─── */}
      <div className="absolute bottom-7 right-8">
        <span className="loader-meta text-[10px] uppercase tracking-[1.2px] text-text-faint opacity-0">
          v1.0 prototype
        </span>
      </div>
    </div>
  );
}
