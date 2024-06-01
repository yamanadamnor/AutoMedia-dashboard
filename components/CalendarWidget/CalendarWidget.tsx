import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  endOfMonth,
  format,
  isEqual,
  startOfMonth,
  startOfToday,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  setDefaultOptions,
  eachWeekOfInterval,
  isSameWeek,
  add,
  startOfDay,
} from "date-fns";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/utils/cn";
import { calendarFetcher } from "@/utils/calendarFetcher";
import { sonarrMedias, radarrMedias, selectedDate } from "@/components/states";
import type { IRadarrReleases, ISonarrReleases } from "@/components/interfaces";
import DayComponent from "@/components/CalendarWidget/DayComponent";
import MediaReleaseInfo from "@/components/CalendarWidget/MediaReleaseInfo";
import { Button } from "@/ui/Button";

setDefaultOptions({
  weekStartsOn: 1,
});

function CalendarWidget() {
  const today = startOfToday();

  const [todaysSonarrReleases, setTodaysSonarr] = useState<ISonarrReleases[]>(
    [],
  );
  const [todaysRadarrReleases, setTodaysRadarr] = useState<IRadarrReleases[]>(
    [],
  );
  const [selectedDay, setSelectedDay] = useAtom(selectedDate);

  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  });

  const [sonarrMedia, setSonarrMedia] = useAtom(sonarrMedias);
  const [radarrMedia, setRadarrMedia] = useAtom(radarrMedias);

  useEffect(() => {
    calendarFetcher("/api/modules/calendar", selectedDay, "sonarr")
      .then((data: ISonarrReleases[]) => {
        setSonarrMedia(data);
        const sonarrReleases = data.filter((media) => {
          const mediaDate = startOfDay(new Date(media.airDateUtc));
          return isEqual(mediaDate, startOfDay(selectedDay));
        });
        setTodaysSonarr(sonarrReleases);
      })
      .catch(() => {
        setTodaysSonarr([]);
      });

    calendarFetcher("/api/modules/calendar", selectedDay, "radarr")
      .then((data: IRadarrReleases[]) => {
        setRadarrMedia(data);
        const radarrReleases = data.filter((media) => {
          const digitalRelease = new Date(media.digitalRelease);
          const physicalRelease = new Date(media.physicalRelease);
          return (
            isEqual(startOfDay(digitalRelease), startOfDay(selectedDay)) ||
            isEqual(startOfDay(physicalRelease), startOfDay(selectedDay))
          );
        });
        setTodaysRadarr(radarrReleases);
      })
      .catch(() => {
        setTodaysRadarr([]);
      });
  }, [selectedDay, setRadarrMedia, setSonarrMedia]);

  const weeksOfSelectedMonth = eachWeekOfInterval({
    start: startOfMonth(selectedDay),
    end: endOfMonth(selectedDay),
  });

  const daysOfSelectedMonth: Date[][] = [];

  weeksOfSelectedMonth.map((startOfWeek) => {
    daysOfSelectedMonth.push([
      startOfWeek,
      ...eachDayOfInterval({
        start: startOfWeek,
        end: endOfWeek(startOfWeek),
      }),
    ]);
  });

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
    <motion.div
      className={cn(
        "group:border flex w-full flex-col rounded-xl border border-gray-700 bg-service-card p-3 py-8 text-white backdrop-blur-sm @container md:flex-row lg:flex-col",
        todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
          ? "gap-4"
          : "",
      )}
    >
      <div className=" flex w-full flex-col gap-y-4 @container md:w-3/5 lg:w-full">
        <div className="flex w-full items-center justify-center gap-x-2 @sm:gap-x-8">
          <div className="flex max-w-56 items-center justify-center sm:w-60 ">
            <div className="self-center text-7xl">
              <h2 className="select-none leading-none">
                {format(selectedDay, "dd")}
              </h2>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="select-none font-thin">
                {format(selectedDay, "yyyy")}
              </h2>
              <h2 className="leading-0 select-none text-3xl">
                {format(selectedDay, "MMMM")}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around px-4">
          <Button className="group px-2" onClick={() => paginate(-1)}>
            <ChevronLeftIcon
              className="h-6 w-6 select-none text-zinc-500 transition-all
            duration-200 ease-in-out group-hover:text-gray-200"
            />
          </Button>
          <Button
            onClick={() => setSelectedDay(today)}
            className="flex items-center gap-x-2"
          >
            <CalendarIcon className="w-4" />
            today
          </Button>

          <Button className="group px-2" onClick={() => paginate(1)}>
            <ChevronRightIcon
              className="h-6 w-6 select-none text-zinc-500 transition-all 
                duration-200 ease-in-out group-hover:text-gray-200"
            />
          </Button>
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
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? ""
            : "hidden",
          "h-0.5 w-auto rounded-full bg-service-card",
          "md:block md:h-auto md:w-0.5",
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? "lg:h-0.5 lg:w-auto"
            : "",
        )}
      ></div>

      <motion.div
        key={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? "populated"
            : "empty"
        }
        variants={mediaReleaseInfoVariants}
        initial={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? "populated"
            : "empty"
        }
        animate={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? "populated"
            : "empty"
        }
        className="scrollbar max-h-96 overflow-y-auto"
      >
        <MediaReleaseInfo
          selectedDay={selectedDay}
          sonarrReleases={sonarrMedia}
          radarrReleases={radarrMedia}
        />
      </motion.div>
    </motion.div>
  );
}
function RenderCalendarCells({
  daysOfSelectedMonth,
}: {
  daysOfSelectedMonth: Date[][];
}) {
  const [selectedDay, setSelectedDay] = useAtom(selectedDate);
  const sonarrMedia = useAtomValue(sonarrMedias);
  const radarrMedia = useAtomValue(radarrMedias);

  return (
    <>
      {daysOfSelectedMonth.map((row) => {
        return row.map((cell, index) => {
          if (index % 8 == 0) {
            return (
              <div
                key={`${format(cell, "yyyy-MM-dd")}-${index}`}
                className={cn(
                  "mt-1 h-2/3 w-2/4 select-none justify-self-center rounded pt-1 text-center text-sm",
                  isSameWeek(cell, selectedDay)
                    ? "text-gray-300 "
                    : "text-gray-600",
                )}
              >
                {format(cell, "I")}
              </div>
            );
          } else {
            return (
              <DayComponent
                key={`${format(cell, "yyyy-MM-dd")}-${index}`}
                day={cell}
                selectedDay={selectedDay}
                onClick={() => setSelectedDay(cell)}
                sonarrMedia={sonarrMedia}
                radarrMedia={radarrMedia}
              />
            );
          }
        });
      })}
    </>
  );
}

export default CalendarWidget;
