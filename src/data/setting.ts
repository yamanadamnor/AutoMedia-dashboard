"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { setting } from "@/db/schema";
import { type SettingUpdate, settingUpdateSchema } from "@/db/zod-schemas";

export async function getSettings() {
	const settings = await db.select().from(setting);
	return settings;
}

export async function updateSetting(key: string, data: SettingUpdate) {
	const parsed = settingUpdateSchema.safeParse(data);

	if (!parsed.success) {
		return false;
	}

	await db.update(setting).set(data).where(eq(setting.key, key));
}
