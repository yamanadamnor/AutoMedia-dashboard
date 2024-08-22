import { format } from "date-fns";
import type { MediaType } from "pages/api/modules/calendar";
export function mediaFetcher<T>(
  url: string,
  mediaType: MediaType,
  startDate: Date,
  endDate: Date,
) {
  const searchParams = new URLSearchParams({
    startDate: format(startDate, "yyyy-MM-dd"),
    endDate: format(endDate, "yyyy-MM-dd"),
    type: mediaType,
  });

  return fetch(`${url}?${searchParams.toString()}`, {
    method: "GET",
  }).then((res) => res.json() as Promise<T>);
}
