const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sourcecodesavage.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's.w.org',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
