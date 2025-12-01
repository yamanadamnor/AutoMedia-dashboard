import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				hostname: "raw.githubusercontent.com",
			},
			{
				hostname: "image.tmdb.org",
			},
			{
				hostname: "artworks.thetvdb.com",
			},
			{
				hostname: "cdn.jsdelivr.net",
			},
		],
	},
};

export default nextConfig;
