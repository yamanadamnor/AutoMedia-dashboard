import { defineConfig } from "prisma/config";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "src/prisma/migrations",
		seed: "tsx src/prisma/seed.ts",
	},
	datasource: {
		url: "file:./config/dashboard.db",
	},
});
