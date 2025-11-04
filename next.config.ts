import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // add your image domains if needed
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
