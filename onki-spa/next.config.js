/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dwzkhpgtc',
  },
  experimental: {
    serverActions: true,
  },
  // Enable static exports for Netlify
  output: 'standalone',
  distDir: '.next'
}

module.exports = nextConfig
