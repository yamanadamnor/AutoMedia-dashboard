import { db } from ".";
import { setting } from "./schema";

async function seed() {
	const settings = {
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

	const insertValues = Object.entries(settings).map((entry) => ({
		key: entry[0],
		value: String(entry[1]),
	}));

	await db.insert(setting).values(insertValues).onConflictDoNothing({
		target: setting.key,
	});
}

seed();
