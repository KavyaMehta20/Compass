"use client";

import { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { courses, Course } from "@/data";
import { CourseCard } from "@/components/CourseCard";
import { CourseIntelModal } from "@/components/CourseIntelModal";
import { profIntelData } from "@/data/intel";

gsap.registerPlugin(useGSAP);

function getDept(code: string) {
  return code.split(" ")[0];
}

const DEPT_LABELS: Record<string, string> = {
  ACCT: "Accounting",
  BANA: "Business Analytics",
  DECS: "Decision Sciences",
  FINC: "Finance",
  HRDE: "HR Development",
  HSPT: "Hospitality",
  INTB: "International Business",
  MGIS: "Management IS",
  MGMT: "Management",
  MKTG: "Marketing",
  SCBI: "Careers in Business",
  SERQ: "Strategic Quality",
  EEEE: "Electrical Engineering",
  MECE: "Mechanical Engineering",
  ISEE: "Industrial Engineering",
  EGEN: "Engineering (General)",
  CSEC: "Cybersecurity",
  GCIS: "Computing",
  ISTE: "IT / CIT",
  NSSA: "Networking & Systems",
  SWEN: "Software Engineering",
  ARTH: "Art History",
  FDTN: "Foundation Design",
  IGME: "Interactive Media",
  NMDE: "New Media Design",
  ANTH: "Anthropology",
  COMM: "Communication",
  ECON: "Economics",
  ELCA: "Academic English",
  ENGL: "English",
  HIST: "History",
  LING: "Linguistics",
  MLAR: "Arabic",
  MLFR: "French",
  MLSP: "Spanish",
  PHIL: "Philosophy",
  POLS: "Political Science",
  PSYC: "Psychology",
  SOCI: "Sociology",
  UWRT: "Writing",
  BIOG: "Biology (Engineering)",
  BIOL: "Biology",
  CHMG: "Chemistry",
  MATH: "Mathematics",
  PHYS: "Physics",
  STAT: "Statistics",
  ACSC: "Academic Success",
  ACDS: "Academic Development",
  YOPS: "RIT 365",
  PROF: "Professional Programs",
};

export default function CoursesPage() {
  const container = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Only animate the page header — not individual cards (too many)
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".dept-group", {
        opacity: 0,
        y: 12,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: container, dependencies: [query] }
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.prof.toLowerCase().includes(q) ||
        c.section.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof courses>();
    for (const c of filtered) {
      const dept = getDept(c.code);
      if (!map.has(dept)) map.set(dept, []);
      map.get(dept)!.push(c);
    }
    return map;
  }, [filtered]);

  const deptKeys = Array.from(grouped.keys()).sort();

  return (
    <section ref={container} className="pb-16">
      {/* Header */}
      <div className="text-[11px] text-glow uppercase tracking-[1.2px] mb-2.5 font-mono">
        course intel
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
        <h2 className="text-[28px] text-text flex-1 leading-tight">
          Not star ratings. The stuff that actually decides your semester.
        </h2>
        <div className="text-[13px] text-text-faint font-mono flex-shrink-0">
          {filtered.length} course{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Search bar */}
      <div className="relative mb-10">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-text-faint"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
        <input
          id="course-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by course name, code, professor…"
          className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-glass-border bg-panel text-text text-[14px] placeholder:text-text-faint outline-none transition-colors focus:border-glow font-sans"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-text-faint hover:text-text transition-colors text-[12px]"
          >
            clear
          </button>
        )}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-faint">
          <div className="text-[32px] mb-3">🔍</div>
          <div className="text-[15px]">No courses match &ldquo;{query}&rdquo;</div>
          <div className="text-[12px] mt-1 opacity-70">
            Try searching by department code (e.g. CSEC, MATH) or professor name
          </div>
        </div>
      )}

      {/* Grouped results */}
      {deptKeys.map((dept) => {
        const deptCourses = grouped.get(dept)!;
        const label = DEPT_LABELS[dept] ?? dept;
        return (
          <div key={dept} className="dept-group mb-8">
            {/* Dept header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[1.4px] text-text-faint">
                {dept}
              </span>
              <span className="text-[13px] text-text-soft">{label}</span>
              <div className="flex-1 h-px bg-glass-border" />
              <span className="text-[11px] font-mono text-text-faint">
                {deptCourses.length}
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 gap-3">
              {deptCourses.map((c, i) => (
                <CourseCard
                  key={`${c.code}-${c.section}-${i}`}
                  course={c}
                  onClick={() => setSelectedCourse(c)}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {selectedCourse && (
        <CourseIntelModal
          course={selectedCourse}
          intel={
            profIntelData[selectedCourse.prof.toLowerCase().replace(/[^a-z0-9]/g, "-")] ?? {
              profId: selectedCourse.prof.toLowerCase().replace(/[^a-z0-9]/g, "-"),
              rating: 0,
              traits: [],
              reviews: [],
            }
          }
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
}
