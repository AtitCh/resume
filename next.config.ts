import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/resume', // Replace <repository-name> with your GitHub repository name
  assetPrefix: '/resume', // Same as basePath
  trailingSlash: true,
  // reactStrictMode: true,
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

export default nextConfig;
