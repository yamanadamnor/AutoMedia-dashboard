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

  const startDate = format(startOfMonth(today), 'yyyy-MM-dd');
  const endDate = format(endOfMonth(today), 'yyyy-MM-dd');

  const getMedias = (type: string) => {
    return poster('/api/modules/calendar', { startDate, endDate, type });
  };

  useEffect(() => {
    getMedias('sonarr').then((data) => {
      setSonarrMedia(data);
    });
    getMedias('radarr').then((data) => {
      setRadarrMedia(data);
    });
  }, []);

  return (
    <div className="max-w-7xl w-full group:border col-start-2 col-span-2 bg-service-card rounded-xl backdrop-blur-sm p-8">
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
        // FIXME: Argument of type 'string | boolean' is not assignable to parameter of type 'string'.
        // Type 'boolean' is not assignable to type 'string'.ts(2345)
        !isSameMonth(day, selectedDay) && 'text-gray-600',
        isEqual(startOfDay(day), startOfDay(selectedDay)) && 'bg-[#1e1e2e]',
        isEqual(startOfDay(day), startOfDay(today)) && 'border',
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
  seriesId: number;
  series: { images: { coverType: string; url: string }[] };
}

interface IRadarrReleases {
  id: number;
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

  return (
    <div className="flex flex-col gap-8">
      <AnimatePresence>
        {filteredSonarr.map((sonarrItem) => (
          <MediaReleaseItem
            key={sonarrItem.seriesId}
            mediaImages={sonarrItem.series.images}
            mediaItem={sonarrItem}
            mediaItemType="sonarr"
            selectedDay={selectedDay}
          />
        ))}

        {filteredRadarr.map((radarrItem) => (
          <MediaReleaseItem
            key={radarrItem.id}
            mediaImages={radarrItem.images}
            mediaItem={radarrItem}
            mediaItemType="radarr"
            selectedDay={selectedDay}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface IMediaReleaseItem {
  // FIXME: remove any type
  mediaItem: any;
  mediaItemType: 'sonarr' | 'radarr';
  mediaImages: { coverType: string; url: string }[];
  selectedDay: Date;
}
const MediaReleaseItem = ({
  mediaItem,
  mediaItemType,
  mediaImages,
  selectedDay,
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

  let mediaReleaseType = '';
  let mediaItemDate = new Date();

  if (mediaItemType === 'sonarr') {
    mediaItemDate = new Date(mediaItem.airDateUtc);
  } else if (mediaItemType === 'radarr') {
    const digitalReleaseDate = new Date(mediaItem.digitalRelease);

    mediaItemDate = isEqual(startOfDay(digitalReleaseDate), startOfDay(selectedDay))
      ? digitalReleaseDate
      : new Date(mediaItem.physicalRelease);
    mediaReleaseType = isEqual(startOfDay(digitalReleaseDate), startOfDay(selectedDay))
      ? 'Digital release'
      : 'Physical release';
  }

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
          {mediaItemType === 'sonarr' && (
            <>
              <h2 className="font-bold text-2xl">{mediaItem.series.title}</h2>
              <h3 className="font-bold text-blue-400">{`S${mediaItem.seasonNumber} E${mediaItem.episodeNumber} - ${mediaItem.title}`}</h3>
            </>
          )}
          {mediaItemType === 'radarr' && (
            <>
              <h2 className="font-bold text-2xl">{mediaItem.title}</h2>
              <h3 className="font-bold text-orange-400">{mediaReleaseType}</h3>
            </>
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
