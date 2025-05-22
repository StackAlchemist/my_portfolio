import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {hostname: "em-content.zobj.net"},
      {hostname: "www.pinterest.com"},
      {hostname: "via.placeholder.com"},
      {hostname: "placehold.co"},
    ]
  }
};

export default nextConfig;
