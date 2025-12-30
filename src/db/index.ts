import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const dbPath = "./config/dashboard.db";

// Ensure folder exists
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const client = createClient({ url: `file:${dbPath}` });
export const db = drizzle({ client });
