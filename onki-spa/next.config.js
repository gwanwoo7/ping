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
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:8888', '*.netlify.app', '*.netlify.com'],
      bodySizeLimit: '2mb'
    },
  },
  // Netlify specific settings
  distDir: '.next'
}

module.exports = nextConfig
