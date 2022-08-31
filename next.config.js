// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['raw.githubusercontent.com', 'image.tmdb.org', 'artworks.thetvdb.com'],
  },
};

module.exports = nextConfig;
