"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, BarChart3, BookOpen, Check, ChevronDown, MapPin, Navigation, Search, Users } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapUI } from "@/components/map/MapUI";

gsap.registerPlugin(useGSAP);

const journey = [
  { number: "01", title: "Search", description: "Find a course, professor, or room.", icon: Search },
  { number: "02", title: "Understand", description: "See the workload, policies, and student reality.", icon: BarChart3 },
  { number: "03", title: "Navigate", description: "Get the exact block, floor, and room.", icon: Navigation },
  { number: "04", title: "Arrive", description: "Drill into the campus and get there with confidence.", icon: Check },
];

export default function ProblemSolutionPage() {
  const container = useRef<HTMLDivElement>(null);
  const [activeJourney, setActiveJourney] = useState(0);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      ".ps-reveal",
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, delay: 0.15, ease: "power3.out" }
    );
    gsap.to(".ps-orbit", { rotation: 360, duration: 26, repeat: -1, ease: "none" });
  }, { scope: container });

  return (
    <section ref={container} className="pb-20">
      <div className="ps-reveal opacity-0 flex items-center gap-2 text-[11px] text-glow uppercase tracking-[1.4px] mb-5 font-mono">
        <span className="w-2 h-2 rounded-full bg-glow animate-pulse" /> problem &amp; solution
      </div>

      <div className="ps-reveal opacity-0 relative overflow-hidden rounded-[24px] border border-glass-border px-6 py-14 sm:px-12 sm:py-20 text-center" style={{ background: "radial-gradient(circle at 50% 20%, #21395e 0%, #111d35 42%, #0a1120 78%)" }}>
        <div className="ps-orbit pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-glow/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-glow/10 blur-3xl" />
        <p className="relative mb-4 text-[12px] font-mono uppercase tracking-[1.8px] text-teal">Compass / RIT Dubai</p>
        <h1 className="relative mx-auto max-w-[720px] text-[clamp(2.45rem,7vw,5rem)] leading-[0.98] text-text">
          Find the right course.<br /><em className="not-italic text-glow">Find the right professor.</em><br />Without the guesswork.
        </h1>
        <p className="relative mx-auto mt-7 max-w-[530px] text-[15px] leading-relaxed text-text-soft">Compass brings course reality and campus navigation into one student-first tool.</p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/courses" className="inline-flex items-center gap-2 rounded-lg border border-glow bg-glow px-5 py-3 text-[13px] font-medium text-[#241A05] transition-transform hover:scale-[1.04]">Explore course reality <ArrowRight size={15} /></Link>
          <Link href="/map" className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-glass px-5 py-3 text-[13px] font-medium text-text transition-colors hover:bg-glass-strong">Open campus locator <MapPin size={15} /></Link>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Link href="/courses" className="ps-reveal opacity-0 group rounded-2xl border border-teal/30 bg-[linear-gradient(135deg,rgba(143,199,184,.14),rgba(20,31,56,.75))] p-6 transition-transform hover:-translate-y-1">
          <div className="mb-12 flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[1.2px] text-teal"><BookOpen size={15} /> course reality</span><ArrowRight className="text-teal transition-transform group-hover:translate-x-1" size={17} /></div>
          <div className="font-mono text-[11px] text-teal/70">SWEN 101 / SECTION 600</div>
          <div className="mt-1 text-[22px] text-text">Introduction to Software Engineering</div>
          <div className="mt-1 text-[13px] text-text-soft">Dr. Ahmed Khan</div>
          <div className="mt-5 flex items-end justify-between"><div><span className="text-[28px] text-glow">4.6</span><span className="ml-2 text-[12px] text-text-faint">/ 5 student reality</span></div><span className="rounded-md bg-glass px-2 py-1 text-[11px] text-teal">126 responses</span></div>
        </Link>
        <Link href="/map" className="ps-reveal opacity-0 group rounded-2xl border border-glow/30 bg-[linear-gradient(135deg,rgba(240,199,122,.14),rgba(20,31,56,.75))] p-6 transition-transform hover:-translate-y-1">
          <div className="mb-12 flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[1.2px] text-glow"><MapPin size={15} /> campus locator</span><ArrowRight className="text-glow transition-transform group-hover:translate-x-1" size={17} /></div>
          <div className="font-mono text-[11px] text-glow/70">PROFESSOR FOUND</div>
          <div className="mt-1 text-[22px] text-text">Dr. Sarah Khan</div>
          <div className="mt-1 text-[13px] text-text-soft">G-Block <span className="text-glow">·</span> Floor 3 <span className="text-glow">·</span> Room 304</div>
          <div className="mt-5 flex items-center justify-between"><span className="flex items-center gap-2 text-[13px] text-text"><span className="h-2 w-2 animate-pulse rounded-full bg-coral" /> destination locked</span><span className="rounded-md bg-glow-soft px-2 py-1 text-[11px] text-glow">Navigate <ArrowRight className="ml-1 inline" size={12} /></span></div>
        </Link>
      </div>

      <div className="ps-reveal opacity-0 mt-28">
        <div className="mb-6 max-w-[610px]"><h2 className="mb-3 text-[11px] font-mono uppercase tracking-[1.3px] text-coral">The problem</h2><h3 className="text-[clamp(2rem,4vw,3.2rem)] text-text">Two student problems.<br /><span className="text-text-soft">One missing layer.</span></h3></div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-coral/25 bg-coral-soft/40 p-6"><div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-coral-soft text-coral"><BookOpen size={19} /></div><h3 className="text-[24px] text-text">Registration is a guessing game</h3><p className="mt-3 text-[14px] leading-relaxed text-text-soft">Catalogs tell students what a course covers. They do not tell them what it is actually like.</p><div className="mt-6 grid grid-cols-2 gap-2 text-[12px] text-text-soft"><span className="rounded-lg border border-glass-border bg-glass p-3">Attendance enforced?</span><span className="rounded-lg border border-glass-border bg-glass p-3">How heavy is it?</span><span className="rounded-lg border border-glass-border bg-glass p-3">Group work?</span><span className="rounded-lg border border-glass-border bg-glass p-3">Grades when?</span></div></article>
          <article className="rounded-2xl border border-glow/25 bg-glow-soft/20 p-6"><div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-glow-soft text-glow"><MapPin size={19} /></div><h3 className="text-[24px] text-text">Finding professors is a scavenger hunt</h3><p className="mt-3 text-[14px] leading-relaxed text-text-soft">Knowing who to ask for help is not enough. Students still need the building, floor, and room.</p><div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-text-soft"><span className="rounded-lg bg-glass px-3 py-2">Ask around</span><ArrowRight size={13} /><span className="rounded-lg bg-glass px-3 py-2">Read door plaques</span><ArrowRight size={13} /><span className="rounded-lg bg-glass px-3 py-2">Hope you arrive</span></div></article>
        </div>
      </div>

      <div className="ps-reveal opacity-0 mt-20 rounded-2xl border border-glass-border bg-glass p-6"><h2 className="mb-3 text-[11px] font-mono uppercase tracking-[1.3px] text-teal">Mini research</h2><p className="max-w-[760px] text-[15px] leading-relaxed text-text-soft">Talking to students during registration and exam weeks surfaced the same two complaints across majors: decisions are made on vibes and rumor, while students who already know they need help still lose time locating the right building, floor, and room. Course catalogs list content, not experience; campus maps show buildings, not office assignments.</p><div className="mt-5 flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.8px] text-text-faint"><span className="rounded-full border border-glass-border px-3 py-1.5">registration week</span><span className="rounded-full border border-glass-border px-3 py-1.5">exam week</span><span className="rounded-full border border-glass-border px-3 py-1.5">across majors</span></div></div>

      <div className="ps-reveal opacity-0 mt-28 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><h2 className="mb-3 text-[11px] font-mono uppercase tracking-[1.3px] text-teal">The solution</h2><h3 className="text-[clamp(2rem,4vw,3.2rem)] text-text">Search.<br />Understand.<br /><span className="text-glow">Arrive.</span></h3><p className="mt-5 max-w-[390px] text-[14px] leading-relaxed text-text-soft">A structured course profile meets a live 3D campus locator, so the decision and the destination live in the same experience.</p></div><div className="grid gap-2 sm:grid-cols-4">
        {journey.map((step, index) => { const Icon = step.icon; const active = activeJourney === index; return <button key={step.number} onClick={() => setActiveJourney(index)} className={`group text-left rounded-xl border p-4 transition-all ${active ? "border-glow/50 bg-glow-soft/30" : "border-glass-border bg-glass hover:bg-glass-strong"}`}><div className={`mb-8 flex items-center justify-between ${active ? "text-glow" : "text-text-faint"}`}><span className="font-mono text-[11px]">{step.number}</span><Icon size={16} /></div><div className={`text-[14px] ${active ? "text-text" : "text-text-soft"}`}>{step.title}</div><div className="mt-2 text-[11px] leading-relaxed text-text-faint">{step.description}</div>{active && <div className="mt-4 h-0.5 bg-glow" />}</button>; })}
      </div></div>

      <div className="ps-reveal opacity-0 mt-28"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[1.3px] text-glow"><Navigation size={14} /> The visual centerpiece</div><h2 className="text-[clamp(2rem,4vw,3.2rem)] text-text">From a name<br /><span className="text-glow">to a room.</span></h2></div><p className="max-w-[340px] text-[13px] leading-relaxed text-text-soft">Select a block, search a professor, and drill into the exact floor. This is campus navigation as it feels in person.</p></div><MapUI /></div>

      <div className="ps-reveal opacity-0 mt-28 grid gap-5 border-y border-glass-border py-12 md:grid-cols-[1fr_1.25fr] md:items-center"><div><h2 className="mb-3 text-[11px] font-mono uppercase tracking-[1.3px] text-coral">Why it matters</h2><h3 className="text-[clamp(2rem,4vw,3.2rem)] text-text">Stop guessing your courses.<br /><span className="text-glow">Stop hunting for offices.</span></h3></div><div className="grid grid-cols-3 gap-3">{[{ value: "8", label: "office blocks", detail: "No searchable professor directory" }, { value: "0", label: "connected tools", detail: "Course reality + location" }, { value: "2", label: "recurring frictions", detail: "Selection + navigation" }].map((stat) => <div key={stat.label} className="border-l border-glass-border pl-4"><div className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none text-glow">{stat.value}</div><div className="mt-2 text-[12px] text-text">{stat.label}</div><div className="mt-1 text-[10px] leading-relaxed text-text-faint">{stat.detail}</div></div>)}</div></div>

      <div className="ps-reveal opacity-0 mt-16 text-center"><p className="mx-auto max-w-[600px] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight text-text">Compass turns two recurring student frustrations into <em className="not-italic text-glow">one simple experience.</em></p><div className="mt-7 flex justify-center gap-3"><Link href="/courses" className="inline-flex items-center gap-2 text-[13px] text-teal hover:text-text">See course reality <ArrowRight size={14} /></Link><Link href="/map" className="inline-flex items-center gap-2 text-[13px] text-glow hover:text-text">Find a professor <ArrowRight size={14} /></Link></div></div>
    </section>
  );
}
