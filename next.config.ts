import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/resume', // Replace <repository-name> with your GitHub repository name
  assetPrefix: '/resume', // Same as basePath
  reactStrictMode: true,
};

export default nextConfig;
