# Compass

> Know what a course is really like. Know where its professor actually sits.

A website built for GDC RIT Dubai DesignAthon 2026, solving two real student problems:

1. **Course reality** — structured cards showing workload, grading style, attendance, and group-work weight beyond the syllabus
2. **Campus locator** — a 3D interactive map that resolves a professor name or room code (e.g. `D213`) to block → floor → room

---

## Getting Started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production bundle
```

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + global CSS variables |
| 3D map | React Three Fiber + `@react-three/drei` |
| Animation | GSAP 3 + `@gsap/react` (`useGSAP`) |
| Icons | `lucide-react` |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home — hero, stat cards
│   ├── courses/page.tsx      # Courses — course-reality cards
│   ├── map/page.tsx          # Campus map — reads ?prof= param
│   └── problem-solution/     # Problem & Solution page
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky nav
│   │   └── Footer.tsx
│   ├── map/
│   │   ├── MapUI.tsx         # Search, elevation panel, detail card
│   │   └── MapScene.tsx      # R3F Canvas, buildings, camera controls
│   ├── CourseCard.tsx        # Course-reality card with prof link
│   ├── CustomCursor.tsx      # Dot + lerped ring, touch-safe
│   └── PageLoader.tsx        # Branded loading sequence
└── data/
    └── index.ts              # ← ALL DATA IS HERE — swap in real data
```

---

## Data — What's Placeholder

**Everything in [`src/data/index.ts`](src/data/index.ts) is placeholder.** Replace before going live:

| Export | What it is | What to replace with |
|---|---|---|
| `courses` | 4 sample courses | Real RIT Dubai course data |
| `professors` | 8 sample professors with room codes | Real faculty directory with verified room numbers |
| `layout` | 10 building blocks A–J with floor counts | Real RIT Dubai block map |
| `domeCell` | Dome position on grid | Verify real location |

The `getRoomCode(prof)` function formats room codes as `Block + Floor + Room` (e.g. `D213`). Adjust if the real numbering system differs.

---

## Vercel Deployment

No server-only dependencies. Deploy steps:

1. Push to a GitHub repo
2. Import into Vercel
3. No env vars needed for the prototype
4. Vercel will auto-detect Next.js — just click **Deploy**

> **Note:** The `turbopack.root` warning in dev is harmless — it only appears because `package-lock.json` exists one level up in `C:\Users\Kavya\`. It does not affect the build.

---

## Motion & Accessibility

- All GSAP animations check `window.matchMedia("(prefers-reduced-motion: reduce)")` and skip if true
- Custom cursor is hidden on touch/coarse-pointer devices via `(hover: none) and (pointer: coarse)` media query
- 3D map uses `CameraControls` from drei — supports touch pan/pinch-zoom on mobile

---

*Prototype · GDC RIT Dubai DesignAthon 2026 · #designathon2026*
