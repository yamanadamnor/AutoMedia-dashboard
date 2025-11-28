import { prisma } from "@/server/prisma";

async function main() {
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

	for (const [key, value] of Object.entries(settings)) {
		await prisma.setting.upsert({
			where: { key: key },
			update: { key: key, value: String(value) },
			create: { key: key, value: String(value) },
		});
	}
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		// eslint-disable-next-line no-console
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
