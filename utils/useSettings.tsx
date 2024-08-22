import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import type { SettingsFormValues } from "@/components/SettingsForm";

export const useSettings = () => {
  const { data, error, isLoading } = useSWR<SettingsFormValues, Error>(
    "/api/settings",
    fetcher,
  );

  return { data, error, isLoading };
};
