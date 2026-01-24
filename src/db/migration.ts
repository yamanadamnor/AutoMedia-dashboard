import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { migrate } from "drizzle-orm/libsql/migrator";
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
