import useSWR from "swr";
import { fetcher } from "@/utils";
import type { SettingsFormValues } from "@/components/SettingsForm";

export const useSettings = () => {
  const settingsFetcher = useSWR<SettingsFormValues, Error>(
    "/api/settings",
    fetcher,
  );

  return settingsFetcher;
};
