import type { MediaType, RadarrResponse } from "pages/api/modules/calendar";
import useSWR from "swr";
import { mediaFetcher } from "./mediaFetcher";

export function useMovies(startDate: Date, endDate: Date) {
	const { data, error, isLoading } = useSWR<
		RadarrResponse[],
		Error,
		[string, MediaType, Date, Date]
	>(
		["/api/modules/calendar", "movie", startDate, endDate],
		([url, type, startDate, endDate]) =>
			mediaFetcher(url, type, startDate, endDate),
	);

	return { data, error, isLoading };
}
