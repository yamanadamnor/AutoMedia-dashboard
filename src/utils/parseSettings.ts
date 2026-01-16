import type { SettingsFormValues } from "@/components/SettingsForm";
import type { SettingSelect } from "@/db/zod-schemas";

export const parseSettings = (
	settings: SettingSelect[],
): SettingsFormValues => {
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
