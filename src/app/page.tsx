"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Wait ~2.8s for loader to finish, then stagger everything in
      const delay = 2.8;
      const tl = gsap.timeline({ delay });

      tl.fromTo(
        ".meta-item",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-stage",
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-h1",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-p",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.45"
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".float-card",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.35"
        );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="pt-14 relative">
      {/* ─── Meta row ─────────────────────────────────── */}
      <div className="flex justify-between items-stretch mb-14 gap-4">
        {[
          {
            label: "Built for",
            value: "RIT Dubai students",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
            accent: "var(--teal)",
            accentSoft: "var(--teal-soft)",
          },
          {
            label: "Field",
            value: "Campus navigation + course intel",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            ),
            accent: "var(--glow)",
            accentSoft: "var(--glow-soft)",
          },
          {
            label: "Made for",
            value: "DesignAthon 2026",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ),
            accent: "var(--coral)",
            accentSoft: "var(--coral-soft)",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="meta-item opacity-0 flex-1 relative rounded-2xl px-5 py-4 overflow-hidden"
            style={{
              background: "var(--panel)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {/* Subtle corner glow */}
            <div
              className="absolute top-0 left-0 w-20 h-20 rounded-br-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top left, ${item.accentSoft}, transparent 70%)` }}
            />
            {/* Icon */}
            <div
              className="relative w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ background: item.accentSoft, color: item.accent }}
            >
              {item.icon}
            </div>
            {/* Label */}
            <div className="relative text-[10px] font-mono uppercase tracking-[1.6px] mb-1" style={{ color: item.accent }}>
              {item.label}
            </div>
            {/* Value */}
            <div className="relative text-[14px] font-medium text-text leading-snug">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* ─── Hero stage ───────────────────────────────── */}
      <div
        className="hero-stage opacity-0 relative rounded-[20px] overflow-hidden border border-glass-border px-12 pt-[72px] pb-14 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #1B2E52 0%, #0A1120 70%)",
        }}
      >
        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 w-[560px] h-[560px] border border-white/[0.06] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        {/* Glow orb */}
        <div
          className="absolute top-[38%] left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(240,199,122,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Sparkles */}
        {[
          "top-5 left-6",
          "top-5 right-6",
          "bottom-5 left-6",
          "bottom-5 right-6",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-[14px] h-[14px] text-glow opacity-40`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z" />
            </svg>
          </div>
        ))}

        <h1
          className="hero-h1 relative text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.15] max-w-[560px] mx-auto text-text opacity-0"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          Know what a course is really like.{" "}
          <em className="not-italic" style={{ color: "var(--glow)" }}>
            Know where its professor actually sits.
          </em>
        </h1>
        <p className="hero-p relative text-[15.5px] text-text-soft max-w-[460px] mx-auto mt-5 opacity-0">
          Compass replaces registration guesswork and office-hour scavenger
          hunts with a real reality-check on a course and a live map of exactly
          where to find the person teaching it.
        </p>
        <div className="relative flex gap-3 justify-center mt-8">
          <Link
            href="/courses"
            className="hero-btn opacity-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium border transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--glow)",
              color: "#241A05",
              borderColor: "var(--glow)",
            }}
          >
            Browse courses
          </Link>
          <Link
            href="/map"
            className="hero-btn opacity-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium border transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--glass)",
              color: "var(--text)",
              borderColor: "var(--glass-border)",
            }}
          >
            Open campus map
          </Link>
        </div>
      </div>

      {/* ─── Float cards ──────────────────────────────── */}
      <div className="flex justify-between mt-12 gap-4">
        {[
          { label: "Course flagged", value: "CS 220 — exam-heavy, no curve" },
          { label: "Locating", value: "Dr. Rahul Nair — D213" },
          { label: "Zoom level", value: "Block D, floor 2" },
        ].map((card) => (
          <div
            key={card.label}
            className="float-card opacity-0 flex-1 border border-glass-border rounded-xl px-4 py-3.5 backdrop-blur-[10px] text-left hover:border-glow/30 transition-colors"
            style={{ background: "var(--glass)" }}
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.8px] text-text-faint">
              {card.label}
            </div>
            <div className="mt-1.5 text-text text-[13.5px] font-medium">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
