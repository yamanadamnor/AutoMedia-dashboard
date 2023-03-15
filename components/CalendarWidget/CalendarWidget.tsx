import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import {
  addMonths,
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
  startOfDay,
} from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { classNames, poster } from '../utils';
import { sonarrMedias, radarrMedias, selectedDate, isThisMonth } from '../states';
import type { IRadarrReleases, ISonarrReleases } from '../interfaces';
import DayComponent from './DayComponent';
import MediaReleaseInfo from './MediaReleaseInfo';

setDefaultOptions({
  weekStartsOn: 1,
});

const CalendarWidget = () => {
  const today = startOfToday();
  const [todaysSonarrReleases, setTodaysSonarr] = useState<ISonarrReleases[]>([]);
  const [todaysRadarrReleases, setTodaysRadarr] = useState<IRadarrReleases[]>([]);
  const [selectedDay, setSelectedDay] = useAtom(selectedDate);
  const [isCurrentMonth, setIsCurrentMonth] = useAtom(isThisMonth);
  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  });
  const daysOfSelectedMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(selectedDay)),
    end: endOfWeek(endOfMonth(selectedDay)),
  });

  const weeksOfSelectedMonth = eachWeekOfInterval({
    start: startOfMonth(selectedDay),
    end: endOfMonth(selectedDay),
  });

  const [sonarrMedia, setSonarrMedia] = useAtom(sonarrMedias);
  const [radarrMedia, setRadarrMedia] = useAtom(radarrMedias);

  const getMedias = (type: string, startDate: string, endDate: string) => {
    return poster('/api/modules/calendar', { startDate, endDate, type });
  };

  useEffect(() => {
    const startDate = format(startOfMonth(selectedDay), 'yyyy-MM-dd');
    const endDate = format(endOfMonth(selectedDay), 'yyyy-MM-dd');

    getMedias('sonarr', startDate, endDate)
      .then((data: ISonarrReleases[]) => {
        setSonarrMedia(data);
        const sonarrReleases = data.filter((media) => {
          const mediaDate = startOfDay(new Date(media.airDateUtc));
          return isEqual(mediaDate, startOfDay(selectedDay));
        });
        setTodaysSonarr(sonarrReleases);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    getMedias('radarr', startDate, endDate)
      .then((data: IRadarrReleases[]) => {
        setRadarrMedia(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    setIsCurrentMonth(isEqual(startOfMonth(selectedDay), startOfMonth(today)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);

  return (
    <div
      className={classNames(
        '@container',
        'w-full group:border bg-service-card rounded-xl backdrop-blur-sm p-8',
        'flex flex-col gap-4',
        'md:flex-row',
        'lg:flex-col',
      )}
    >
      <div className={classNames('w-full', 'md:w-3/5', 'lg:w-full')}>
        <div
          className={classNames(
            'space-x-2 flex justify-between items-center',
            isCurrentMonth ? 'pb-8' : '',
          )}
        >
          <ChevronLeftIcon
            onClick={() => setSelectedDay(startOfMonth(addMonths(selectedDay, -1)))}
            className={classNames(
              'p-1 h-8 rounded select-none transition ease-in-out',
              'duration-300 hover:bg-[#272731] hover:shadow-lg',
            )}
          />

          <div className="flex justify-center items-center">
            <div className="text-7xl self-center">
              <h2 className="select-none">{format(selectedDay, 'dd')}</h2>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="select-none font-thin">{format(selectedDay, 'yyyy')}</h2>
              <h2 className="select-none text-3xl">{format(selectedDay, 'MMMM')}</h2>
            </div>
          </div>

          <ChevronRightIcon
            onClick={() => setSelectedDay(startOfMonth(addMonths(selectedDay, 1)))}
            className={classNames(
              'p-1 h-8 rounded select-none transition ease-in-out',
              'duration-300 hover:bg-[#272731] hover:shadow-lg',
            )}
          />
        </div>

        {!isCurrentMonth && (
          <button
            className="py-4 text-center cursor-pointer select-none w-full"
            onClick={() => setSelectedDay(today)}
          >
            today
          </button>
        )}
        <div className="flex justify-center">
          <div className="grid gap-y-2">
            {/* Used to skip the first row */}
            <span></span>

            {weeksOfSelectedMonth.map((week) => (
              <div
                key={format(week, 'yyyy-MM-dd')}
                className="text-center self-center text-gray-700"
              >
                {format(week, 'I')}
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-y-2">
            {weekDays.map((weekday) => (
              <div
                key={format(weekday, 'yyyy-MM-dd')}
                className="text-center font-bold text-gray-600"
              >
                <span className="hidden @sm:block">{format(weekday, 'EE')}</span>

                <span className="@sm:hidden">{format(weekday, 'EEEEE')}</span>
              </div>
            ))}

            {daysOfSelectedMonth.map((day) => (
              <DayComponent
                key={format(day, 'yyyy-MM-dd')}
                day={day}
                selectedDay={selectedDay}
                onClick={() => setSelectedDay(day)}
                sonarrMedia={sonarrMedia}
                radarrMedia={radarrMedia}
              />
            ))}
          </div>
        </div>
      </div>

      {(todaysRadarrReleases.length > 0 || todaysSonarrReleases.length > 0) && (
        <>
          <div
            className={classNames(
              'w-auto h-0.5 rounded-full bg-service-card',
              'md:w-0.5 md:h-auto',
              'lg:w-auto lg:h-0.5 ',
            )}
          ></div>

          <div className="max-h-96 overflow-y-auto scrollbar">
            <MediaReleaseInfo
              sonarrReleases={sonarrMedia}
              radarrReleases={radarrMedia}
              selectedDay={selectedDay}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarWidget;
