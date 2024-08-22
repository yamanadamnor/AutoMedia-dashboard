"use server";

import { prisma } from "@/server/prisma";
import type { Prisma } from "@prisma/client";
import { settingsFormSchema } from "@/components/SettingsForm";

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
