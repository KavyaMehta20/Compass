"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { professors, Professor, getRoomCode, layout, courses } from "@/data";
import { MapScene } from "./MapScene";

gsap.registerPlugin(useGSAP);

// Get all professors in a given block
function getProfsInBlock(block: string): Professor[] {
  return professors.filter((p) => p.block === block);
}

// Get courses taught by a professor (matching by name)
function getCoursesByProf(profName: string) {
  return courses.filter((c) => c.prof === profName);
}

export function MapUI({ initialProfId }: { initialProfId?: string }) {
  const [query, setQuery] = useState("");
  const [isElevationOpen, setIsElevationOpen] = useState(false);
  const [activeProf, setActiveProf] = useState<Professor | null>(null);
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [targetFloor, setTargetFloor] = useState<number | null>(null);
  const [expandedProf, setExpandedProf] = useState<string | null>(null);
  const elevationRef = useRef<HTMLDivElement>(null);

  // Handle ?prof= deep link from course cards
  useEffect(() => {
    if (initialProfId) {
      const p = professors.find((p) => p.id === initialProfId);
      if (p) handleSelectProf(p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProfId]);

  // GSAP animate floor bars when elevation opens
  useGSAP(
    () => {
      if (isElevationOpen) {
        gsap.fromTo(
          ".floor-bar-item",
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, delay: 0.3, ease: "power2.out" }
        );
      }
    },
    { dependencies: [isElevationOpen, activeBlock], scope: elevationRef }
  );

  const results = query
    ? professors.filter(
        (p) =>
          getRoomCode(p).toLowerCase() === query.replace(/\s/g, "").toLowerCase() ||
          p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectBlock = (b: string) => {
    setActiveBlock(b);
    setActiveProf(null);
    setIsElevationOpen(true);
    setTargetFloor(1);
    setExpandedProf(null);
  };

  const handleSelectProf = (p: Professor) => {
    setActiveProf(p);
    setActiveBlock(p.block);
    setIsElevationOpen(true);
    setTargetFloor(p.floor);
    setExpandedProf(p.id);
    setQuery("");
  };

  const handleReset = () => {
    setQuery("");
    setActiveProf(null);
    setActiveBlock(null);
    setIsElevationOpen(false);
    setTargetFloor(null);
    setExpandedProf(null);
  };

  const activeLayout = layout.find((l) => l.b === activeBlock);
  const blockProfs = activeBlock ? getProfsInBlock(activeBlock) : [];

  // Group block profs by floor
  const profsByFloor = new Map<number, Professor[]>();
  for (const p of blockProfs) {
    if (!profsByFloor.has(p.floor)) profsByFloor.set(p.floor, []);
    profsByFloor.get(p.floor)!.push(p);
  }

  return (
    <div className="bg-panel border border-glass-border rounded-[18px] p-5 mt-7 relative">
      {/* Search bar */}
      <div className="flex justify-between items-center gap-4 flex-wrap mb-3.5">
        <div className="relative flex-1 min-w-[240px]">
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
            <svg className="w-3.5 h-3.5 text-text-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search professor name or room, e.g. D213"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full font-sans text-[14px] py-[11px] pl-9 pr-3.5 border border-glass-border rounded-lg bg-glass text-text placeholder:text-text-faint outline-none cursor-none transition-colors focus:border-glow"
          />
          {results.length > 0 && (
            <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-bg-soft border border-glass-border rounded-lg overflow-hidden z-20 max-h-[200px] overflow-y-auto shadow-xl">
              {results.map((r) => (
                <div
                  key={r.id}
                  className="px-3.5 py-[9px] text-[13px] border-b last:border-b-0 border-glass-border cursor-none flex justify-between items-center hover:bg-glass transition-colors"
                  onClick={() => handleSelectProf(r)}
                >
                  <span className="text-text">{r.name}</span>
                  <span className="font-mono text-[11px] text-glow bg-glow-soft px-2 py-0.5 rounded">
                    {getRoomCode(r)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleReset}
          className="text-[13px] text-text-soft cursor-none border border-glass-border py-[9px] px-4 rounded-lg bg-glass whitespace-nowrap hover:bg-glass-strong transition-colors"
        >
          reset view
        </button>
      </div>

      {/* Map stage */}
      <div
        className="rounded-[14px] overflow-hidden"
        style={{ position: "relative", height: "520px", background: "var(--paper-bg)" }}
      >
        <MapScene
          activeProf={activeProf}
          activeBlock={activeBlock}
          onSelectBlock={handleSelectBlock}
        />

        {/* Elevation panel — slides in from right */}
        <div
          ref={elevationRef}
          className="absolute top-4 right-4 bottom-4 overflow-hidden bg-[rgba(20,31,56,0.96)] backdrop-blur-[14px] rounded-xl border border-glass-border transition-[width] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ width: isElevationOpen ? "280px" : "0px", borderWidth: isElevationOpen ? "1px" : "0px" }}
        >
          <div className="p-4 h-full flex flex-col overflow-hidden" style={{ width: "280px" }}>
            {/* Panel header */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <div className="font-serif text-[17px] text-text leading-tight">
                  Block {activeBlock}
                </div>
                <div className="text-[11.5px] text-text-faint mt-0.5">
                  {activeLayout?.floors ?? 0} floor{activeLayout?.floors !== 1 ? "s" : ""} · {blockProfs.length} professor{blockProfs.length !== 1 ? "s" : ""}
                </div>
              </div>
              <button
                onClick={handleReset}
                className="text-text-faint hover:text-text transition-colors mt-0.5 cursor-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Hint if no profs */}
            {blockProfs.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <div className="text-text-faint text-[12.5px] leading-relaxed">
                    No professor data<br />available for Block {activeBlock}
                  </div>
                  <div className="text-[10.5px] text-text-faint mt-2 opacity-60">
                    Try searching by name above
                  </div>
                </div>
              </div>
            )}

            {/* Floor stack with professors */}
            {blockProfs.length > 0 && (
              <div className="flex-1 overflow-y-auto flex flex-col gap-2 mt-3 pr-0.5">
                {activeLayout &&
                  Array.from({ length: activeLayout.floors }).map((_, i) => {
                    const f = i + 1;
                    const isTarget = f === targetFloor;
                    const floorProfs = profsByFloor.get(f) ?? [];

                    return (
                      <div
                        key={f}
                        className={`floor-bar-item border rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                          isTarget
                            ? "border-glow/40 bg-[rgba(240,199,122,0.07)]"
                            : "border-glass-border bg-glass"
                        }`}
                      >
                        {/* Floor label */}
                        <button
                          onClick={() => setTargetFloor(isTarget ? null : f)}
                          className={`w-full text-left px-3 py-2.5 text-[12px] font-mono cursor-none flex items-center justify-between transition-colors ${
                            isTarget ? "text-glow" : "text-text-soft hover:text-text"
                          }`}
                        >
                          <span>Floor {f === 1 ? "G" : f - 1}</span>
                          <div className="flex items-center gap-2">
                            {floorProfs.length > 0 && (
                              <span
                                className={`text-[10px] px-1.5 py-0.5 rounded font-sans ${
                                  isTarget ? "bg-glow-soft text-glow" : "bg-glass-border text-text-faint"
                                }`}
                              >
                                {floorProfs.length} prof{floorProfs.length !== 1 ? "s" : ""}
                              </span>
                            )}
                            {floorProfs.length === 0 && (
                              <span className="text-[10px] text-text-faint opacity-50">empty</span>
                            )}
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              className={`transition-transform ${isTarget ? "rotate-180 text-glow" : "text-text-faint"}`}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        {/* Professor list — show when floor is active */}
                        {isTarget && floorProfs.length > 0 && (
                          <div className="border-t border-glass-border">
                            {floorProfs.map((prof) => {
                              const isExpanded = expandedProf === prof.id;
                              const profCourses = getCoursesByProf(prof.name);
                              return (
                                <div key={prof.id} className="border-b last:border-b-0 border-glass-border">
                                  {/* Prof row */}
                                  <button
                                    onClick={() => {
                                      setExpandedProf(isExpanded ? null : prof.id);
                                      setActiveProf(isExpanded ? null : prof);
                                    }}
                                    className="w-full text-left px-3 py-2.5 cursor-none hover:bg-white/[0.04] transition-colors flex items-start justify-between gap-2"
                                  >
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[12.5px] text-text leading-tight truncate">
                                        {prof.name}
                                      </div>
                                      <div className="text-[10.5px] text-text-faint mt-0.5 font-mono">
                                        Room {getRoomCode(prof)} · {prof.hours}
                                      </div>
                                    </div>
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2.5}
                                      className={`flex-shrink-0 mt-1 transition-transform ${
                                        isExpanded ? "rotate-180 text-glow" : "text-text-faint"
                                      }`}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>

                                  {/* Courses taught */}
                                  {isExpanded && (
                                    <div className="px-3 pb-2.5 pt-0">
                                      {profCourses.length === 0 ? (
                                        <div className="text-[11px] text-text-faint italic">
                                          No courses listed
                                        </div>
                                      ) : (
                                        <div className="flex flex-col gap-1">
                                          {profCourses.map((c, ci) => (
                                            <div
                                              key={ci}
                                              className="flex items-baseline gap-1.5 text-[11px]"
                                            >
                                              <span className="font-mono text-glow flex-shrink-0">
                                                {c.code} §{c.section}
                                              </span>
                                              <span className="text-text-soft truncate">
                                                {c.name}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        {/* Detail card — bottom left (only shows when no elevation panel or from search) */}
        {activeProf && !isElevationOpen && (
          <div className="absolute bottom-4 left-4 z-[6] w-[240px] bg-[rgba(20,31,56,0.95)] backdrop-blur-[12px] border border-glass-border rounded-xl p-4 detail-card">
            <div className="font-serif text-[16px] text-text leading-tight">
              {activeProf.name}
            </div>
            <div className="text-[11.5px] text-text-faint mt-1">
              Block {activeProf.block}, floor {activeProf.floor}
            </div>
            <div className="mt-2.5 font-mono text-[12.5px] bg-glow-soft text-glow inline-block py-1 px-2.5 rounded">
              {getRoomCode(activeProf)}
            </div>
            <div className="mt-2 text-[12.5px] text-text-soft">
              Office hours: {activeProf.hours}
            </div>
          </div>
        )}

        {/* Drag hint */}
        <div className="absolute bottom-4 right-4 text-[11px] text-text-faint uppercase tracking-[1px] flex gap-3.5 z-[4] pointer-events-none opacity-75"
          style={{ display: isElevationOpen ? "none" : "flex" }}
        >
          <span>drag to explore</span>
          <span>scroll to zoom</span>
          <span>click block to inspect</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-[18px] mt-3.5 text-[12.5px] text-text-soft flex-wrap">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ background: "#E1D9BE" }} />
          office block
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ background: "#7A5A3C" }} />
          dome — no offices
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ background: "var(--room-gold)" }} />
          selected block
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] inline-block" style={{ background: "var(--room-coral)" }} />
          exact room
        </span>
      </div>
    </div>
  );
}
