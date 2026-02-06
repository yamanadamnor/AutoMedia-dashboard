import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db } from ".";

async function runMigrations() {
	console.log("Migration started");

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const migrationsFolder = path.join(__dirname, "../drizzle");

	try {
		migrate(db, { migrationsFolder });
		console.log("Migration completed");
	} catch (error) {
		console.error("Migration failed:", error);
		process.exit(1);
	}
}

void runMigrations();
