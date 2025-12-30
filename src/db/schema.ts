import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestamps = {
	createdAt: int("created_at", {
		mode: "timestamp",
	})
		.notNull()
		.default(sql`(unixepoch())`),

	updatedAt: int("updated_at", {
		mode: "timestamp",
	})
		.notNull()
		.default(sql`(unixepoch())`)
		.$onUpdate(() => new Date()),
};

export const service = sqliteTable("service", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	description: text().notNull(),
	image: text().notNull(),
	href: text().notNull(),
	...timestamps,
});

export const setting = sqliteTable("settings", {
	key: text().primaryKey(),
	value: text(),
	...timestamps,
});
