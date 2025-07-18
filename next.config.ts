import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { domains: ["utfs.io"] },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
