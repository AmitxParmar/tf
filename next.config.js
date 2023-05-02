/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.website-files.com',
      },
    ],
  },
};

module.exports = nextConfig
