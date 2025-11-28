import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsConfigPaths()],
	test: {
		exclude: [".next/**", "node_modules/**"],
	},
});
