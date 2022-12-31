// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      'raw.githubusercontent.com',
      'image.tmdb.org',
      'artworks.thetvdb.com',
      'cdn.jsdelivr.net',
    ],
  },
};

module.exports = nextConfig;
