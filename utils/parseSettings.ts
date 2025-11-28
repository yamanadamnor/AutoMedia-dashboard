import type { Setting } from "@prisma/client";
import type { SettingsFormValues } from "@/components/SettingsForm";

export const parseSettings = (settings: Setting[]): SettingsFormValues => {
	const settingsDeepCopy = structuredClone(settings);
	const parsedSettings = Object.fromEntries(
		settingsDeepCopy.map((item) => [
			item.key,
			item.value === "true" || item.value === "false"
				? JSON.parse(item.value)
				: item.value,
		]),
	) as SettingsFormValues;

	return parsedSettings;
};
