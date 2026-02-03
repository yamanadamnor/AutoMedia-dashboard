import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		tsConfigPaths({
			projectDiscovery: "lazy",
		}),
	],
	test: {
		exclude: [".next/**", "node_modules/**"],
	},
});
