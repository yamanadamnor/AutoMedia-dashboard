import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	outputFileTracingIncludes: {
		"/*": [
			"./src/db/**/*",
			"./src/drizzle/**/*",
			"./drizzle.config.ts",
			"./node_modules/drizzle-orm/**/*",
			"./node_modules/drizzle-kit/**/*",
		],
	},
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
