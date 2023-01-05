import { format, isEqual, startOfToday, startOfDay, isSameMonth } from 'date-fns';
import { IDayComponent } from '../interfaces';
import { classNames } from '../utils';

function DayComponent({ day, sonarrMedia, radarrMedia, selectedDay, onClick }: IDayComponent) {
  const today = startOfToday();
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
    <div
      className={classNames(
        'w-8 h-12 transition ease-in-out duration-300 flex flex-col justify-center align-center',
        'justify-self-center self-center text-center rounded select-none hover:bg-[#272731] hover:shadow-lg',
        isSameMonth(day, selectedDay) ? '' : 'text-gray-600',
        isEqual(startOfDay(day), startOfDay(selectedDay)) ? 'bg-[#272731]' : '',
        isEqual(startOfDay(day), startOfDay(today)) ? 'border border-gray-500' : '',
      )}
      onClick={onClick}
    >
      {format(day, 'd')}
      <div className="flex justify-around pt-1 px-1">
        {radarrReleases && radarrReleases.length > 0 && (
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
        )}
        {sonarrReleases && sonarrReleases.length > 0 && (
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
        )}
      </div>
    </div>
  );
}

export default DayComponent;
