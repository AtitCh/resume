import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  // trailingSlash: true,
  // reactStrictMode: true,
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

export default nextConfig;
