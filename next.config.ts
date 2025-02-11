import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io",
      "img.clerk.com",
      "subdomain",
      "files.stripcon",
    ],
  },
};

export default nextConfig;
