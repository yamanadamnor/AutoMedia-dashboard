import { sql } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next";
import type { SettingsFormValues } from "@/components/SettingsForm";
import { db } from "@/db";
import { setting } from "@/db/schema";
import { parseSettings } from "@/utils/parseSettings";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		const settings = req.body as SettingsFormValues;

		try {
			const settingsToUpsert = Object.entries(settings).map(([key, value]) => ({
				key: key,
				value: String(value),
			}));

			await db
				.insert(setting)
				.values(settingsToUpsert)
				.onConflictDoUpdate({
					target: setting.key,
					set: { value: sql.raw(`excluded.${setting.value.name}`) },
				});
		} catch (error) {
			console.log(error);
			return res.status(500).send({ message: "Could not save settings" });
		}

		return res.status(201).json(settings);
	} else if (req.method === "GET") {
		const settings = await db.select().from(setting);
		const parsedSettings = parseSettings(settings);
		res.status(200).json(parsedSettings);
	} else {
		res.status(405).send({ message: "Method not allowed" });
	}
}
