import { endOfMonth, isSameDay, startOfMonth } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import type { RadarrResponse } from "pages/api/modules/calendar";
import { useContext } from "react";
import MediaReleaseItem from "@/components/CalendarWidget/MediaReleaseItem";
import { filterMoviesByDate } from "@/utils/filterMoviesByDate";
import { filterTvShowsByDate } from "@/utils/filterTvShowsByDate";
import { useMovies } from "@/utils/useMovies";
import { useShows } from "@/utils/useShows";
import { CalendarContext } from "./CalendarContext";

function MediaReleaseInfo() {
	const { selectedDay } = useContext(CalendarContext);
	const { data: movies } = useMovies(
		startOfMonth(selectedDay),
		endOfMonth(selectedDay),
	);
	const { data: tvShows } = useShows(
		startOfMonth(selectedDay),
		endOfMonth(selectedDay),
	);
	const filteredMovies = filterMoviesByDate(movies ? movies : [], selectedDay);
	const filteredTvShows = filterTvShowsByDate(
		tvShows ? tvShows : [],
		selectedDay,
	);

	const getMovieReleaseTypeByDate = (
		movie: RadarrResponse,
		date: Date,
	): { date: Date | undefined; type: string | undefined } => {
		if (
			movie.physicalRelease &&
			isSameDay(new Date(movie.physicalRelease), date)
		) {
			return {
				date: new Date(movie.physicalRelease),
				type: "Physical release",
			};
		} else if (
			movie.digitalRelease &&
			isSameDay(new Date(movie.digitalRelease), date)
		) {
			return { date: new Date(movie.digitalRelease), type: "Digital release" };
		}
		return { date: undefined, type: undefined };
	};
	return (
		<motion.div className="flex flex-col">
			<AnimatePresence mode="popLayout">
				{filteredMovies.map((movie, index) => {
					const release = getMovieReleaseTypeByDate(movie, selectedDay);
					return (
						<MediaReleaseItem
							key={`${movie.title}-${index}`}
							releaseDate={release.date}
							description={release.type}
							title={movie.title}
							images={movie.images}
							isAvailable={movie.hasFile}
							mediaType="movie"
						/>
					);
				})}

				{filteredTvShows.map((tvShow) => (
					<MediaReleaseItem
						key={`${tvShow.series.title}-S${tvShow.seasonNumber}-E${tvShow.episodeNumber}`}
						releaseDate={new Date(tvShow.airDateUtc)}
						description={`S${tvShow.seasonNumber} E${tvShow.episodeNumber} - ${tvShow.title}`}
						title={tvShow.series.title}
						images={tvShow.series.images}
						isAvailable={tvShow.hasFile}
						mediaType="tv"
					/>
				))}
			</AnimatePresence>
		</motion.div>
	);
}

export default MediaReleaseInfo;
