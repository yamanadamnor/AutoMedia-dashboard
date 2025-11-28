import { StarIcon } from "@heroicons/react/16/solid";
import {
	endOfMonth,
	format,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
} from "date-fns";
import { useContext } from "react";
import { cn } from "@/utils/cn";
import { filterMoviesByDate } from "@/utils/filterMoviesByDate";
import { filterTvShowsByDate } from "@/utils/filterTvShowsByDate";
import { useMovies } from "@/utils/useMovies";
import { useShows } from "@/utils/useShows";
import { CalendarContext } from "./CalendarContext";

function DayComponent({ day }: { day: Date }) {
	const { selectedDay, setSelectedDay } = useContext(CalendarContext);
	const { data: movies } = useMovies(startOfMonth(day), endOfMonth(day));
	const { data: tvShows } = useShows(startOfMonth(day), endOfMonth(day));
	const filteredMovies = filterMoviesByDate(movies ? movies : [], day);
	const filteredTvShows = filterTvShowsByDate(tvShows ? tvShows : [], day);
	const isNewSeason =
		filteredTvShows.filter((release) => release.episodeNumber === 1).length > 0;

	return (
		<button
			type="button"
			className={cn(
				"flex h-12 w-9 select-none flex-col items-center justify-around justify-self-center rounded leading-none transition duration-300 ease-in-out hover:bg-[#272731] hover:shadow-service-sm",
				isSameMonth(day, selectedDay) ? "" : "text-gray-600",
				isSameDay(day, selectedDay) ? "bg-[#272731] shadow-lg" : "",
				isToday(day) ? "border border-gray-700" : "",
			)}
			onClick={() => setSelectedDay(day)}
		>
			{format(day, "d")}
			<div className="flex w-full items-center justify-around px-2">
				{filteredMovies.length > 0 && isSameMonth(day, selectedDay) && (
					<div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
				)}

				{filteredTvShows.length > 0 &&
					isSameMonth(day, selectedDay) &&
					!isNewSeason && (
						<div className={cn("h-1.5 w-1.5 rounded-full bg-blue-400")}></div>
					)}
				{isNewSeason && isSameMonth(day, selectedDay) && (
					<StarIcon className="h-2.5 w-2.5 text-blue-400" />
				)}
			</div>
		</button>
	);
}

export default DayComponent;
