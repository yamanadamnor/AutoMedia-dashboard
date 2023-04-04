import { isEqual, startOfDay } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import type { IMediaReleaseInfo } from '../interfaces';
import { classNames } from '../utils';
import MediaReleaseItem from './MediaReleaseItem';

function MediaReleaseInfo({ sonarrReleases, radarrReleases, selectedDay }: IMediaReleaseInfo) {
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
    <motion.div className={classNames('flex flex-col')}>
      <AnimatePresence mode="popLayout">
        {filteredSonarr.map((sonarrItem) => (
          <MediaReleaseItem
            key={`${sonarrItem.series.title}-S${sonarrItem.seasonNumber}-E${sonarrItem.episodeNumber}`}
            mediaItemDate={new Date(sonarrItem.airDateUtc)}
            mediaItemDesc={`S${sonarrItem.seasonNumber} E${sonarrItem.episodeNumber} - ${sonarrItem.title}`}
            mediaItemTitle={sonarrItem.series.title}
            mediaImages={sonarrItem.series.images}
            mediaHasFile={sonarrItem.hasFile}
            mediaItemType="sonarr"
          />
        ))}
        {filteredRadarr.map((radarrItem, index) => {
          const movieDate = getMovieDate(radarrItem.digitalRelease, radarrItem.physicalRelease);
          return (
            <MediaReleaseItem
              key={`${radarrItem.title}-${index}`}
              mediaItemDate={movieDate ? movieDate.mediaItemDate : new Date(selectedDay)}
              mediaItemDesc={movieDate ? movieDate.mediaReleaseType : 'Unknown release'}
              mediaItemTitle={radarrItem.title}
              mediaImages={radarrItem.images}
              mediaHasFile={radarrItem.hasFile}
              mediaItemType="radarr"
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

export default MediaReleaseInfo;
