/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optimization for Vercel
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enable experimental features if needed
  experimental: {
    // Remove or configure as needed for your use case
  },
}

export default nextConfig
