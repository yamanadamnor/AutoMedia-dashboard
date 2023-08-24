import { prisma } from "@/server/prisma";

export const getSettings = async () => {
  const settings = await prisma.setting.findMany();
  return settings;
};
