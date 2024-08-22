import { isEqual, startOfDay } from "date-fns";
import type { SonarrResponse } from "pages/api/modules/calendar";

export function filterTvShowsByDate(allTvShows: SonarrResponse[], date: Date) {
  return allTvShows.filter((media) => {
    const mediaDate = startOfDay(new Date(media.airDateUtc));
    return isEqual(mediaDate, startOfDay(date));
  });
}
