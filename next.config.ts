import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muse2025.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
