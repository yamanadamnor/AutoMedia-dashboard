import { format, isEqual, startOfDay, isSameMonth, isToday, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';
import type { IDayComponent } from '../interfaces';
import { calendarFetcher, classNames } from '../utils';

function DayComponent({ day, sonarrMedia, radarrMedia, selectedDay, onClick }: IDayComponent) {
  if (!sonarrMedia && !radarrMedia) return <h2 className="font-bold">No releases</h2>;

  const sonarrReleases = sonarrMedia.filter((media) => {
    const mediaDate = startOfDay(new Date(media.airDateUtc));
    return isEqual(mediaDate, startOfDay(day));
  });

  const radarrReleases = radarrMedia.filter((media) => {
    const digitalRelease = new Date(media.digitalRelease);
    const physicalRelease = new Date(media.physicalRelease);
    return (
      isEqual(startOfDay(digitalRelease), startOfDay(day)) ||
      isEqual(startOfDay(physicalRelease), startOfDay(day))
    );
  });

  return (
    <button
      className={classNames(
        'w-8 h-12 transition ease-in-out duration-300',
        'flex flex-col justify-center align-center',
        'justify-self-center self-center text-center rounded select-none',
        'hover:bg-[#272731] hover:shadow-service-sm',
        isSameMonth(day, selectedDay) ? '' : 'text-gray-600',
        isSameDay(day, selectedDay) ? 'bg-[#272731] shadow-lg' : '',
        isToday(day) ? 'border border-gray-700' : '',
      )}
      onClick={onClick}
    >
      {format(day, 'd')}
      <div className="flex justify-around pt-1 px-1 h-full">
        {radarrReleases && radarrReleases.length > 0 && (
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
        )}
        {sonarrReleases && sonarrReleases.length > 0 && (
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
        )}
      </div>
    </button>
  );
}

export default DayComponent;
