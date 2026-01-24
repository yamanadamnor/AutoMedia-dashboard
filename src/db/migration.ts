import fs from "node:fs";
import path from "node:path";
import { migrate } from "drizzle-orm/libsql/migrator";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { db } from ".";

async function runMigrations() {
	console.log("Migration started");

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const migrationsFolder = path.join(__dirname, "../drizzle");

	try {
		await migrate(db, { migrationsFolder });
		console.log("Migration completed");
	} catch (error) {
		console.error("Migration failed:", error);
	}
}

void runMigrations();
