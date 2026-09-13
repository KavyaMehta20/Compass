import { Course } from "@/data";

const DEPT_COLORS: Record<string, { bg: string; text: string }> = {
  ACCT: { bg: "rgba(240,199,122,0.14)", text: "#F0C77A" },
  BANA: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  FINC: { bg: "rgba(240,199,122,0.14)", text: "#F0C77A" },
  MGMT: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  MKTG: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  CSEC: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  GCIS: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  ISTE: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  NSSA: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  SWEN: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  EEEE: { bg: "rgba(240,199,122,0.14)", text: "#F0C77A" },
  MECE: { bg: "rgba(240,199,122,0.14)", text: "#F0C77A" },
  ISEE: { bg: "rgba(240,199,122,0.14)", text: "#F0C77A" },
  MATH: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  PHYS: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  STAT: { bg: "rgba(143,199,184,0.14)", text: "#8FC7B8" },
  PSYC: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  COMM: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  UWRT: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  ENGL: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
  NMDE: { bg: "rgba(230,138,108,0.14)", text: "#E68A6C" },
};

function getDeptColor(code: string) {
  const dept = code.split(" ")[0];
  return DEPT_COLORS[dept] ?? { bg: "rgba(255,255,255,0.08)", text: "#A9AFC0" };
}

export function CourseCard({ course, onClick }: { course: Course, onClick?: () => void }) {
  const color = getDeptColor(course.code);
  const isTBD = course.prof === "TBD";
  const deptCode = course.code.split(" ")[0];
  const courseNum = course.code.split(" ").slice(1).join(" ");

  return (
    <div
      onClick={onClick}
      className={`course-card rounded-2xl border border-glass-border p-5 transition-all duration-200 group ${onClick ? "cursor-pointer hover:border-glow/40 hover:bg-glass" : "hover:border-glow/30"}`}
      style={{ background: "var(--panel)" }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: name + code */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] text-text leading-snug">{course.name}</h3>
          <div className="flex items-center gap-2 mt-1.5">
            {/* Dept badge */}
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md leading-none tracking-wide"
              style={{ background: color.bg, color: color.text }}
            >
              {deptCode}
            </span>
            <span className="text-[12px] font-mono text-text-faint">
              {courseNum} · §{course.section}
            </span>
          </div>
        </div>

        {/* Right: prof */}
        <div className="flex-shrink-0 text-right">
          <div className={`text-[13px] ${isTBD ? "text-text-faint italic" : "text-text-soft"}`}>
            {isTBD ? "Instructor TBD" : course.prof}
          </div>
          <div className="text-[10px] font-mono text-text-faint mt-0.5 uppercase tracking-[0.8px]">
            instructor
          </div>
        </div>
      </div>
    </div>
  );
}
