import useSWR from "swr";
import type { SettingsFormValues } from "@/components/SettingsForm";
import { fetcher } from "@/utils/fetcher";

export const useSettings = () => {
	const { data, error, isLoading } = useSWR<SettingsFormValues, Error>(
		"/api/settings",
		fetcher,
	);

	return { data, error, isLoading };
};
