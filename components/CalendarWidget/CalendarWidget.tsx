import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  endOfMonth,
  format,
  isEqual,
  isSameMonth,
  startOfMonth,
  startOfToday,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  setDefaultOptions,
  eachWeekOfInterval,
  startOfDay,
} from 'date-fns';

import { classNames, poster } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';

setDefaultOptions({
  weekStartsOn: 1,
});

const CalendarWidget = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const weekDays = eachDayOfInterval({ start: startOfWeek(today), end: endOfWeek(today) });
  const daysOfSelectedMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(selectedDay)),
    end: endOfWeek(endOfMonth(selectedDay)),
  });

  const weeksOfSelectedMonth = eachWeekOfInterval({
    start: startOfMonth(selectedDay),
    end: endOfMonth(selectedDay),
  });

  const [sonarrMedia, setSonarrMedia] = useState([]);
  const [radarrMedia, setRadarrMedia] = useState([]);

  const getMedias = (type: string, startDate: string, endDate: string) => {
    return poster('/api/modules/calendar', { startDate, endDate, type });
  };

  useEffect(() => {
    const startDate = format(startOfMonth(selectedDay), 'yyyy-MM-dd');
    const endDate = format(endOfMonth(selectedDay), 'yyyy-MM-dd');

    getMedias('sonarr', startDate, endDate).then((data) => {
      setSonarrMedia(data);
    });
    getMedias('radarr', startDate, endDate).then((data) => {
      setRadarrMedia(data);
    });
  }, [selectedDay]);

  return (
    <div
      className={classNames(
        'max-w-7xl w-full group:border col-start-2 col-span-2',
        'bg-service-card rounded-xl backdrop-blur-sm p-8 ',
      )}
    >
      <div className="pb-8 space-x-2 flex justify-center align-center">
        <div className="text-7xl self-center">
          <h2 className="">{format(selectedDay, 'dd')}</h2>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-thin">{format(selectedDay, 'yyyy')}</h2>
          <h2 className="text-3xl">{format(selectedDay, 'MMMM')}</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid">
          {/* Used to skip the first row */}
          <span></span>

          {weeksOfSelectedMonth.map((week) => (
            <div key={format(week, 'yyyy-MM-dd')} className="text-center self-center text-gray-600">
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
              {format(weekday, 'EE')}
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
      <div className="w-full overflow-hidden">
        <div className="w-full my-12 h-0.5 rounded-full bg-service-card" />
        <MediaReleaseInfo
          sonarrReleases={sonarrMedia}
          radarrReleases={radarrMedia}
          selectedDay={selectedDay}
        />
      </div>
    </div>
  );
};
interface IDayComponent {
  day: Date;
  selectedDay: Date;
  onClick: () => void;
  sonarrMedia: {
    airDateUtc: Date;
  }[];
  radarrMedia: {
    digitalRelease: Date;
    physicalRelease: Date;
  }[];
}

const DayComponent = ({ day, sonarrMedia, radarrMedia, selectedDay, onClick }: IDayComponent) => {
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
        isEqual(startOfDay(day), startOfDay(selectedDay)) ? 'bg-[#1e1e2e]' : '',
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
};

interface ISonarrReleases {
  airDateUtc: Date;
  title: string;
  seriesId: number;
  seasonNumber: number;
  episodeNumber: number;
  series: { title: string; images: { coverType: string; url: string }[] };
}

interface IRadarrReleases {
  id: number;
  title: string;
  digitalRelease: Date;
  physicalRelease: Date;
  images: { coverType: string; url: string }[];
}

interface IMediaReleaseInfo {
  sonarrReleases: ISonarrReleases[];
  radarrReleases: IRadarrReleases[];
  selectedDay: Date;
}

const MediaReleaseInfo = ({ sonarrReleases, radarrReleases, selectedDay }: IMediaReleaseInfo) => {
  const filteredSonarr = sonarrReleases.filter((release) => {
    const mediaDate = startOfDay(new Date(release.airDateUtc));
    return isEqual(startOfDay(selectedDay), mediaDate);
  });

  const filteredRadarr = radarrReleases.filter((release) => {
    const digitalRelease = startOfDay(new Date(release.digitalRelease));
    const physicalRelease = startOfDay(new Date(release.physicalRelease));
    return (
      isEqual(startOfDay(selectedDay), digitalRelease) ||
      isEqual(startOfDay(selectedDay), physicalRelease)
    );
  });

  const getMovieDate = (digitalRelease?: Date, physicalRelease?: Date) => {
    if (!physicalRelease && digitalRelease) {
      return { mediaItemDate: new Date(digitalRelease), mediaReleaseType: 'Digital release' };
    }

    if (physicalRelease && !digitalRelease) {
      return { mediaItemDate: new Date(physicalRelease), mediaReleaseType: 'Physical release' };
    }

    if (digitalRelease && physicalRelease) {
      const digitalReleaseDate = new Date(digitalRelease);

      const mediaItemDate = isEqual(startOfDay(digitalReleaseDate), startOfDay(selectedDay))
        ? digitalReleaseDate
        : new Date(physicalRelease);
      const mediaReleaseType = isEqual(startOfDay(digitalReleaseDate), startOfDay(selectedDay))
        ? 'Digital release'
        : 'Physical release';
      return { mediaItemDate, mediaReleaseType };
    }
    return;
  };

  return (
    <div className="flex flex-col gap-8">
      <AnimatePresence>
        {filteredSonarr.map((sonarrItem) => (
          <MediaReleaseItem
            key={`${sonarrItem.seriesId}${sonarrItem.seasonNumber}${sonarrItem.episodeNumber}`}
            mediaImages={sonarrItem.series.images}
            mediaItemDesc={`S${sonarrItem.seasonNumber} E${sonarrItem.episodeNumber} - ${sonarrItem.title}`}
            mediaItemType="sonarr"
            mediaItemDate={new Date(sonarrItem.airDateUtc)}
            mediaItemTitle={sonarrItem.series.title}
          />
        ))}

        {filteredRadarr.map((radarrItem) => {
          const movieDate = getMovieDate(radarrItem.digitalRelease, radarrItem.physicalRelease);
          return (
            <MediaReleaseItem
              key={radarrItem.id}
              mediaItemDate={movieDate ? movieDate.mediaItemDate : new Date(selectedDay)}
              mediaItemDesc={movieDate ? movieDate.mediaReleaseType : 'Unknown release'}
              mediaItemTitle={radarrItem.title}
              mediaImages={radarrItem.images}
              mediaItemType="radarr"
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

interface IMediaReleaseItem {
  mediaItemTitle: string;
  mediaItemDesc: string;
  mediaImages: { coverType: string; url: string }[];
  mediaItemDate: Date;
  mediaItemType: 'sonarr' | 'radarr';
}
const MediaReleaseItem = ({
  mediaItemTitle,
  mediaItemDesc,
  mediaItemType,
  mediaItemDate,
  mediaImages,
}: IMediaReleaseItem) => {
  const initial = {
    height: 0,
    opacity: 0,
  };

  const animate = {
    opacity: 1,
    height: 'auto',
    bounce: 0,
    transition: {
      duration: 0.4,
    },
  };

  return (
    <motion.div initial={initial} animate={animate} exit={initial}>
      <div className="flex gap-4 justift-start items-start">
        {mediaImages.map((image) => {
          if (image.coverType === 'poster') {
            return (
              <div key={image.coverType} className="relative w-20 h-28 object-cover">
                <Image
                  src={image.url}
                  alt="Media poster"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={image.url}
                />
              </div>
            );
          }
        })}

        <div>
          <h2 className="font-bold text-2xl">{mediaItemTitle}</h2>
          {mediaItemType === 'sonarr' && (
            <h3 className="font-bold text-blue-400">{mediaItemDesc}</h3>
          )}
          {mediaItemType === 'radarr' && (
            <h3 className="font-bold text-orange-400">{mediaItemDesc}</h3>
          )}
          <h4 className="text-gray-400 text-sm">
            {format(mediaItemDate, 'EE, MMM dd')} at {format(mediaItemDate, 'p')}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarWidget;
