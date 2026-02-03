import 'dotenv/config'
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

console.log("Database file: ", process.env.DB_FILE_NAME!)
const sqlite = new Database(process.env.DB_FILE_NAME!);
export const db = drizzle({ client: sqlite });
