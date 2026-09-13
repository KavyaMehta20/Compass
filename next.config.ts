import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // three.js, @react-three/fiber, and @react-three/drei ship ESM-only
  // and must be transpiled for Next.js App Router (server components).
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
