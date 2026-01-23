import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from ".";

async function runMigrations() {
	console.log("Migration started");

	try {
		await migrate(db, { migrationsFolder: "../drizzle" });
		console.log("Migration completed");
	} catch (error) {
		console.error("Migration failed:", error);
	}
}

void runMigrations();
