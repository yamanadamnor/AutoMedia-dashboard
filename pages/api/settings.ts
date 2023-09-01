import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/server/prisma";
import type { SettingsFormValues } from "@/components/SettingsForm";
import { parseSettings } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const settings = req.body as SettingsFormValues;

    try {
      for (const [key, value] of Object.entries(settings)) {
        await prisma.setting.upsert({
          where: { key: key },
          update: { key: key, value: String(value) },
          create: { key: key, value: String(value) },
        });
      }
    } catch {
      return res.status(500).send({ message: "Could not save settings" });
    }

    return res.status(201).json(settings);
  } else if (req.method === "GET") {
    const settings = await prisma.setting.findMany();
    const parsedSettings = parseSettings(settings);
    res.status(200).json(parsedSettings);
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
}
