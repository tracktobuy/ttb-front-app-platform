import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

};

export default nextConfig;