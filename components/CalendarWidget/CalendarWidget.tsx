import {
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
	add,
	eachDayOfInterval,
	eachWeekOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isEqual,
	setDefaultOptions,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from "date-fns";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import DayComponent from "@/components/CalendarWidget/DayComponent";
import MediaReleaseInfo from "@/components/CalendarWidget/MediaReleaseInfo";
import { Button } from "@/ui/Button";
import { cn } from "@/utils/cn";
import { filterMoviesByDate } from "@/utils/filterMoviesByDate";
import { filterTvShowsByDate } from "@/utils/filterTvShowsByDate";
import { useMovies } from "@/utils/useMovies";
import { useShows } from "@/utils/useShows";
import { CalendarContext } from "./CalendarContext";

setDefaultOptions({
	weekStartsOn: 1,
});

function CalendarWidget() {
	const today = startOfToday();
	const [selectedDay, setSelectedDay] = useState<Date>(today);
	const { data: movieData } = useMovies(
		startOfMonth(selectedDay),
		endOfMonth(selectedDay),
	);
	const { data: tvShowData } = useShows(
		startOfMonth(selectedDay),
		endOfMonth(selectedDay),
	);

	const selectedDayMovies = useMemo(() => {
		if (!movieData) return [];
		const filteredMovies = filterMoviesByDate(movieData, selectedDay);
		return filteredMovies;
	}, [selectedDay, movieData]);

	const selectedDayShows = useMemo(() => {
		if (!tvShowData) return [];
		const filteredShows = filterTvShowsByDate(tvShowData, selectedDay);
		return filteredShows;
	}, [selectedDay, tvShowData]);

	const weekDays = eachDayOfInterval({
		start: startOfWeek(selectedDay),
		end: endOfWeek(selectedDay),
	});
	const weeksOfSelectedMonth = eachWeekOfInterval({
		start: startOfMonth(selectedDay),
		end: endOfMonth(selectedDay),
	});

	const daysOfSelectedMonth: Date[][] = weeksOfSelectedMonth.map(
		(startOfWeek) => {
			return [
				startOfWeek,
				...eachDayOfInterval({
					start: startOfWeek,
					end: endOfWeek(startOfWeek),
				}),
			];
		},
	);

	const paginate = (newDirection: number) => {
		setSelectedDay(
			add(selectedDay, {
				months: newDirection,
			}),
		);
	};

	const mediaReleaseInfoVariants: Variants = {
		populated: {
			opacity: 1,
			height: "auto",
		},
		empty: {
			opacity: 0,
			height: 0,
		},
	};

	return (
		<CalendarContext.Provider
			value={{
				selectedDay,
				setSelectedDay,
			}}
		>
			<motion.div
				className={cn(
					"group:border flex w-full flex-col rounded-xl border border-gray-700 bg-service-card p-3 py-8 text-white backdrop-blur-sm @container md:flex-row lg:flex-col",
					selectedDayMovies.length > 0 || selectedDayShows.length > 0
						? "gap-4"
						: "",
				)}
			>
				<div className="flex w-full flex-col gap-y-4 @container md:w-3/5 lg:w-full">
					<div className="flex w-full items-center justify-around gap-x-2 @sm:gap-x-8">
						<div className="flex items-center">
							<div className="self-center text-5xl @lg:text-7xl">
								<h2 className="select-none leading-none">
									{format(selectedDay, "dd")}
								</h2>
							</div>
							<div className="flex flex-col justify-between">
								<h2 className="select-none font-thin">
									{format(selectedDay, "yyyy")}
								</h2>
								<h2 className="leading-0 select-none text-2xl">
									{format(selectedDay, "MMMM")}
								</h2>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-2">
							<Button
								className="group items-center"
								onClick={() => paginate(-1)}
							>
								<ChevronLeftIcon className="h-4 w-4 select-none transition-all duration-200 ease-in-out group-hover:text-gray-200" />
							</Button>
							<Button
								className="group items-center"
								onClick={() => paginate(1)}
							>
								<ChevronRightIcon className="h-4 w-4 select-none transition-all duration-200 ease-in-out group-hover:text-gray-200" />
							</Button>
							<Button
								onClick={() => setSelectedDay(today)}
								className="col-span-2 flex items-center justify-center gap-x-2 text-sm"
							>
								<CalendarIcon className="w-4" />
								today
							</Button>
						</div>
					</div>

					<motion.div className="flex justify-center">
						<div className="grid w-full grid-cols-8 gap-y-2">
							<div className="text-center font-bold text-gray-600"></div>
							{weekDays.map((weekday) => (
								<motion.div
									key={format(weekday, "EEEE")}
									className={cn(
										"select-none",
										isEqual(selectedDay, weekday)
											? "text-gray-300"
											: "text-gray-600",
										"text-center font-bold",
									)}
								>
									<span className="hidden @sm:block">
										{format(weekday, "EE")}
									</span>

									<span className="@sm:hidden">{format(weekday, "EEEEE")}</span>
								</motion.div>
							))}

							<RenderCalendarCells daysOfSelectedMonth={daysOfSelectedMonth} />
						</div>
					</motion.div>
				</div>

				<div
					className={cn(
						selectedDayMovies.length > 0 || selectedDayShows.length > 0
							? ""
							: "hidden",
						"h-0.5 w-auto rounded-full bg-service-card",
						"md:block md:h-auto md:w-0.5",
						selectedDayMovies.length > 0 || selectedDayShows.length > 0
							? "lg:h-0.5 lg:w-auto"
							: "",
					)}
				></div>

				<motion.div
					key={
						selectedDayMovies.length > 0 || selectedDayShows.length > 0
							? "populated"
							: "empty"
					}
					variants={mediaReleaseInfoVariants}
					initial={
						selectedDayMovies.length > 0 || selectedDayShows.length > 0
							? "populated"
							: "empty"
					}
					animate={
						selectedDayMovies.length > 0 || selectedDayShows.length > 0
							? "populated"
							: "empty"
					}
					className="scrollbar max-h-96 overflow-y-auto"
				>
					<MediaReleaseInfo />
				</motion.div>
			</motion.div>
		</CalendarContext.Provider>
	);
}
function RenderCalendarCells({
	daysOfSelectedMonth,
}: {
	daysOfSelectedMonth: Date[][];
}) {
	return (
		<>
			{daysOfSelectedMonth.map((row) => {
				return row.map((cell, index) => {
					if (index % 8 == 0) {
						return (
							<div
								key={`${format(cell, "yyyy-MM-dd")}-${index}`}
								className="mt-1 h-2/3 w-2/4 select-none justify-self-center rounded pt-1 text-center text-sm text-gray-600"
							>
								{format(cell, "I")}
							</div>
						);
					} else {
						return (
							<DayComponent
								key={`${format(cell, "yyyy-MM-dd")}-${index}`}
								day={cell}
							/>
						);
					}
				});
			})}
		</>
	);
}

export default CalendarWidget;
