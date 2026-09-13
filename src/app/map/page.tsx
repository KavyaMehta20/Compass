import { Suspense } from "react";
import { MapUI } from "@/components/map/MapUI";

export const metadata = {
  title: "Campus Map — Compass",
  description: "Find any professor's office on the RIT Dubai campus by name or room code.",
};

// URL: /map?prof=nair
export default async function MapPage({
  searchParams,
}: {
  searchParams: Promise<{ prof?: string }>;
}) {
  const { prof } = await searchParams;

  return (
    <section>
      <div className="text-[11px] text-glow uppercase tracking-[1.2px] mb-2.5">
        campus locator
      </div>
      <h2 className="text-[28px] text-text">
        Search a name or a room. Watch it zoom straight to the floor.
      </h2>
      <p className="text-text-soft max-w-[580px] mt-2 text-[14.5px]">
        Professors sit in blocks A–H. The dome in the courtyard is a landmark
        only. Try a room code like{" "}
        <code className="font-mono text-glow text-[13px] bg-glow-soft px-1.5 py-0.5 rounded">D213</code> — it zooms into
        block D and opens floor 2, room 13.
      </p>

      <Suspense fallback={<div className="mt-7 h-[600px] bg-panel rounded-[18px] border border-glass-border animate-pulse" />}>
        <MapUI initialProfId={prof} />
      </Suspense>
    </section>
  );
}
