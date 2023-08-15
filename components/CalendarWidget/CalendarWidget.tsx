import { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
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
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { calendarFetcher, cn } from '../utils';
import { sonarrMedias, radarrMedias, selectedDate } from '../states';
import type { IRadarrReleases, ISonarrReleases } from '../interfaces';
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
    calendarFetcher('/api/modules/calendar', selectedDay, 'sonarr')
      .then((data: ISonarrReleases[]) => {
        setSonarrMedia(data);
        const sonarrReleases = data.filter((media) => {
          const mediaDate = startOfDay(new Date(media.airDateUtc));
          return isEqual(mediaDate, startOfDay(selectedDay));
        });
        setTodaysSonarr(sonarrReleases);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));

    calendarFetcher('/api/modules/calendar', selectedDay, 'radarr')
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
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
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
      height: 'auto',
    },
    empty: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <motion.div
      className={cn(
        '@container',
        'w-full group:border bg-service-card rounded-xl p-3 py-8',
        'border border-gray-700 backdrop-blur-sm',
        'flex flex-col',
        todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0 ? 'gap-4' : '',
        'md:flex-row',
        'lg:flex-col',
      )}
    >
      {/* w-full md:w-3/5 lg:w-full */}
      <div
        className="
         w-full md:w-3/5 lg:w-full
        @container flex flex-col gap-y-4"
      >
        <div className={cn('flex justify-center gap-x-2 @sm:gap-x-8 w-full items-center')}>
          <ChevronLeftIcon
            onClick={
              () => paginate(-1)
              // setSelectedDay(
              //   add(selectedDay, {
              //     months: -1,
              //   }),
              // )
            }
            className={cn(
              'p-1 h-12 rounded-md select-none transition ease-in-out',
              'duration-300 border-gray-700 hover:bg-[#272731] hover:shadow-lg border',
            )}
          />

          <div className={cn('flex justify-center items-center max-w-56 sm:w-60')}>
            <div className="text-7xl self-center">
              <h2 className="select-none leading-none">{format(selectedDay, 'dd')}</h2>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="select-none font-thin">{format(selectedDay, 'yyyy')}</h2>
              <h2 className="select-none text-3xl leading-0">{format(selectedDay, 'MMMM')}</h2>
            </div>
          </div>

          <ChevronRightIcon
            onClick={
              () => paginate(1)
              // setSelectedDay(
              //   add(selectedDay, {
              //     months: 1,
              //   }),
              // )
            }
            className={cn(
              'p-1 h-12 rounded-md select-none transition ease-in-out',
              'duration-300 hover:bg-[#272731] hover:shadow-lg border border-gray-700',
            )}
          />
        </div>

        <button
          className={cn(
            'px-4 py-2 text-center cursor-pointer select-none place-self-center',
            'border rounded border-gray-700',
            'transition duration-300 ease-in-out',
            'hover:shadow-lg hover:bg-[#272731]',
          )}
          onClick={() => setSelectedDay(today)}
        >
          <CalendarIcon className="w-4 inline-block mr-3" />
          today
        </button>

        <motion.div className="flex justify-center">
          <div className="w-full grid grid-cols-8 gap-y-2">
            <div className="text-center font-bold text-gray-600"></div>
            {weekDays.map((weekday) => (
              <motion.div
                key={format(weekday, 'EEEE')}
                className={cn(
                  'select-none',
                  isEqual(selectedDay, weekday) ? 'text-gray-300' : 'text-gray-600',
                  'text-center font-bold',
                )}
              >
                <span className="hidden @sm:block">{format(weekday, 'EE')}</span>

                <span className="@sm:hidden">{format(weekday, 'EEEEE')}</span>
              </motion.div>
            ))}

            <RenderCalendarCells daysOfSelectedMonth={daysOfSelectedMonth} />
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0 ? '' : 'hidden',
          'w-auto h-0.5 rounded-full bg-service-card',
          'md:w-0.5 md:h-auto md:block',
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0
            ? 'lg:w-auto lg:h-0.5'
            : '',
        )}
      ></div>

      <motion.div
        key={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0 ? 'populated' : 'empty'
        }
        variants={mediaReleaseInfoVariants}
        initial={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0 ? 'populated' : 'empty'
        }
        animate={
          todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0 ? 'populated' : 'empty'
        }
        className="max-h-96 overflow-y-auto scrollbar"
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
function RenderCalendarCells({ daysOfSelectedMonth }: { daysOfSelectedMonth: Date[][] }) {
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
                key={`${format(cell, 'yyyy-MM-dd')}-${index}`}
                className={cn(
                  'justify-self-center text-center mt-1 pt-1 text-sm select-none h-2/3 rounded w-2/4',
                  isSameWeek(cell, selectedDay) ? 'text-gray-300 ' : 'text-gray-600',
                  isSameWeek(startOfToday(), cell) ? 'border border-gray-700' : '',
                )}
              >
                {format(cell, 'I')}
              </div>
            );
          } else {
            return (
              <DayComponent
                key={`${format(cell, 'yyyy-MM-dd')}-${index}`}
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
