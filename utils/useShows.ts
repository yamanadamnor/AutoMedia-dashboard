import useSWR from "swr";
import type { MediaType, SonarrResponse } from "pages/api/modules/calendar";
import { mediaFetcher } from "./mediaFetcher";

export function useShows(startDate: Date, endDate: Date) {
  const { data, error, isLoading } = useSWR<
    SonarrResponse[],
    Error,
    [string, MediaType, Date, Date]
  >(
    ["/api/modules/calendar", "tv", startDate, endDate],
    ([url, type, startDate, endDate]) =>
      mediaFetcher(url, type, startDate, endDate),
  );

  return { data, error, isLoading };
}
