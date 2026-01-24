import { db } from ".";
import { setting } from "./schema";

export async function seed() {
	const insertSettings = {
		ENABLE_SONARR: false,
		SONARR_URL: "",
		SONARR_API_KEY: "",
		ENABLE_RADARR: false,
		RADARR_URL: "",
		RADARR_API_KEY: "",
		ENABLE_JELLYFIN: false,
		JELLYFIN_URL: "",
		JELLYFIN_API_KEY: "",
	};

	const insertValues = Object.entries(insertSettings).map((entry) => ({
		key: entry[0],
		value: String(entry[1]),
	}));

	console.log("Database seed started");

	try {
		await db.insert(setting).values(insertValues).onConflictDoNothing({
			target: setting.key,
		});
		console.log("Database seed completed");
	} catch (error) {
		console.error("Database seed failed:", error);
		process.exit(1);
	}
}

void seed();
