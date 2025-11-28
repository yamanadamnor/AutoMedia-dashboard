"use server";

import { settingsFormSchema } from "@/components/SettingsForm";
import type { Prisma } from "@/prisma/generated/client";
import { prisma } from "@/server/prisma";

export async function getSettings() {
	const settings = await prisma.setting.findMany();
	return settings;
}

export async function updateSetting(
	key: string,
	data: Prisma.SettingUpdateInput,
) {
	const parsed = settingsFormSchema.safeParse(data);

	if (!parsed.success) {
		return false;
	}

	await prisma.setting.update({
		data,
		where: { key },
	});
}
