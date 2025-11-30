import { isEqual, startOfDay } from "date-fns";
import type { RadarrResponse } from "@/pages/api/modules/calendar";

export function filterMoviesByDate(allMovies: RadarrResponse[], date: Date) {
	return allMovies.filter((media) => {
		const digitalRelease = new Date(media.digitalRelease ?? "");
		const physicalRelease = new Date(media.physicalRelease ?? "");
		return (
			isEqual(startOfDay(digitalRelease), startOfDay(date)) ||
			isEqual(startOfDay(physicalRelease), startOfDay(date))
		);
	});
}
