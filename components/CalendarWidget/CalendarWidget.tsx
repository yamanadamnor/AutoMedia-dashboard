import { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
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
} from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { classNames, calendarFetcher } from '../utils';
import { sonarrMedias, radarrMedias, selectedDate } from '../states';
import { IRadarrReleases, ISonarrReleases } from '../interfaces';
import DayComponent from './DayComponent';
import MediaReleaseInfo from './MediaReleaseInfo';

setDefaultOptions({
  weekStartsOn: 1,
});

function CalendarWidget() {
  const today = startOfToday();

  const [todaysSonarrReleases, setTodaysSonarr] = useState<ISonarrReleases[]>([]);
  const [todaysRadarrReleases, setTodaysRadarr] = useState<IRadarrReleases[]>([]);
  const [selectedDay, setSelectedDay] = useAtom(selectedDate);

  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  });

  const [sonarrMedia, setSonarrMedia] = useAtom(sonarrMedias);
  const [radarrMedia, setRadarrMedia] = useAtom(radarrMedias);


  useEffect(() => {
    calendarFetcher("/api/modules/calendar", selectedDay, "sonarr").then(data => {
      setSonarrMedia(data);
      const sonarrReleases = data.filter((media: ISonarrReleases) => {
        const mediaDate = startOfDay(new Date(media.airDateUtc));
        return isEqual(mediaDate, startOfDay(selectedDay));
      });
      setTodaysSonarr(sonarrReleases);
    })

    calendarFetcher("/api/modules/calendar", selectedDay, "radarr").then(data => {
      setRadarrMedia(data);
      const radarrReleases = data.filter((media: IRadarrReleases) => {
        const digitalRelease = new Date(media.digitalRelease);
        const physicalRelease = new Date(media.physicalRelease);
        return (
          isEqual(startOfDay(digitalRelease), startOfDay(selectedDay)) ||
          isEqual(startOfDay(physicalRelease), startOfDay(selectedDay))
        );
      });
      setTodaysRadarr(radarrReleases);
    })
  }, [selectedDay, setRadarrMedia, setSonarrMedia]);

  return (
    <div
      className={classNames(
        '@container',
        'w-full group:border bg-service-card rounded-xl border border-gray-700 backdrop-blur-sm p-3 py-8',
        'flex flex-col gap-4',
        'md:flex-row',
        'lg:flex-col',
      )}
    >
      <div className="w-full md:w-3/5 lg:w-full @container">
        <div
          className={classNames(
            'space-x-2 flex justify-center gap-x-2 @sm:gap-x-8 w-full items-center',
          )}
        >
          <ChevronLeftIcon
            onClick={() => setSelectedDay(add(selectedDay, {
              months: -1
            }))}
            className={classNames(
              'p-1 h-12 rounded select-none transition ease-in-out',
              'duration-300 hover:bg-[#272731] hover:shadow-lg',
            )}
          />

          <div className="flex justify-center items-center">
            <div className="text-7xl self-center">
              <h2 className="select-none">{format(selectedDay, "dd")}</h2>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="select-none font-thin">{format(selectedDay, 'yyyy')}</h2>
              <h2 className="select-none text-3xl">{format(selectedDay, 'MMMM')}</h2>
            </div>
          </div>

          <ChevronRightIcon
            onClick={() => setSelectedDay(add(selectedDay, {
              months: 1
            }))}
            className={classNames(
              'p-1 h-12 rounded select-none transition ease-in-out',
              'duration-300 hover:bg-[#272731] hover:shadow-lg',
            )}
          />
        </div>

        <h3
          className="py-4 text-center cursor-pointer select-none"
          onClick={() => setSelectedDay(today)}
        >
          today
        </h3>

        <div className="flex justify-center">
          <div className="w-full grid grid-cols-8 gap-y-2">
            <div className="text-center font-bold text-gray-600"></div>
            {weekDays.map((weekday) => (
              <div
                key={format(weekday, 'yyyy-MM-dd')}
                className={classNames(
                  'select-none',
                  isEqual(selectedDay, weekday) ? "text-gray-300" : "text-gray-600",
                  "text-center font-bold")}
              >
                <span className="hidden @sm:block">{format(weekday, 'EE')}</span>

                <span className="@sm:hidden">{format(weekday, 'EEEEE')}</span>
              </div>
            ))}
            {sonarrMedia && radarrMedia && (
              <RenderCalendarCells />
            )}

          </div>
        </div>
      </div>

      <div
        className={classNames(
          'w-auto h-0.5 rounded-full bg-service-card hidden',
          'md:w-0.5 md:h-auto md:block',
          'lg:w-auto lg:h-0.5 lg:hidden',
        )}
      ></div>

      {(todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0) && (
        <>

          <div className="max-h-96 overflow-y-auto scrollbar">
            <MediaReleaseInfo
              selectedDay={selectedDay}
              sonarrReleases={sonarrMedia}
              radarrReleases={radarrMedia}
            />
          </div>
        </>
      )}
    </div >
  );
};

function RenderCalendarCells() {
  const [selectedDay, setSelectedDay] = useAtom(selectedDate);
  const sonarrMedia = useAtomValue(sonarrMedias);
  const radarrMedia = useAtomValue(radarrMedias);

  const weeksOfSelectedMonth = eachWeekOfInterval({
    start: startOfMonth(selectedDay),
    end: endOfMonth(selectedDay),
  });

  const daysOfSelectedMonth: Date[][] = [];

  weeksOfSelectedMonth.map((startOfWeek) => {
    daysOfSelectedMonth.push([startOfWeek,
      ...eachDayOfInterval(
        {
          start: startOfWeek,
          end: endOfWeek(startOfWeek)
        })
    ]);
  })

  return (
    <>
      {
        daysOfSelectedMonth.map((row) => {
          return row.map((cell, index) => {
            if (index % 8 == 0) {

              return (
                <div
                  key={format(cell, 'yyyy-MM-dd') + index}
                  className={
                    classNames(
                      "justify-self-center text-center mt-1 pt-1 text-sm select-none h-2/3 rounded w-2/4",
                      isSameWeek(cell, selectedDay) ? "text-gray-300 " : "text-gray-600",
                      isSameWeek(startOfToday(), cell) ? "border border-gray-700" : ""
                    )}>
                  {format(cell, 'I')}
                </div>
              )
            }
            else {
              return (
                <DayComponent
                  key={format(cell, 'yyyy-MM-dd')}
                  day={cell}
                  selectedDay={selectedDay}
                  onClick={() => setSelectedDay(cell)}
                  sonarrMedia={sonarrMedia}
                  radarrMedia={radarrMedia}
                />
              )
            }
          });
        })
      }
    </>
  );
}

export default CalendarWidget;

