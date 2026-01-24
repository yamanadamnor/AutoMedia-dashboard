import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const dbPath = "./config/dashboard.db";
function createDatabaseFolder() {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const databaseFolder = path.join(__dirname, "../../config");
	fs.mkdirSync(databaseFolder, { recursive: true });
}

createDatabaseFolder();

const client = createClient({ url: `file:${dbPath}` });
export const db = drizzle({ client });
