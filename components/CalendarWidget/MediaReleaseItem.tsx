import { format } from 'date-fns';
import Image from 'next/image';
import { motion } from 'framer-motion';

import type { IMediaReleaseItem } from '../interfaces';

function MediaReleaseItem({
  mediaItemTitle,
  mediaItemDesc,
  mediaItemType,
  mediaItemDate,
  mediaImages,
  mediaHasFile,
}: IMediaReleaseItem) {
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

  const exit = {
    opacity: 0,
  };

  return (
    <motion.div initial={initial} animate={animate} exit={exit}>
      <div className="grid grid-cols-mediaItem gap-x-4">
        {mediaImages.map((image) => {
          if (image.coverType === 'poster') {
            return (
              <div key={image.coverType} className="aspect-2/3 w-12 md:w-20 relative ">
                <Image
                  src={image.url}
                  fill
                  alt="Media poster"
                  placeholder="blur"
                  blurDataURL={image.url}
                />
              </div>
            );
          }
        })}

        <div>
          <h2 className="font-bold text-md md:text-xl">{mediaItemTitle}</h2>
          <h3
            className={classNames(
              'text-xs md:text-sm font-bold ',
              mediaItemType === 'sonarr' ? 'text-blue-400' : '',
              mediaItemType === 'radarr' ? 'text-orange-400' : '',
            )}
          >
            {mediaItemDesc}
          </h3>

          {mediaHasFile && (
            <div
              className={classNames(
                'inline-block px-2 py-1 my-2 rounded-full',
                mediaItemType === 'sonarr' ? 'bg-blue-400' : '',
                mediaItemType === 'radarr' ? 'bg-orange-400' : '',
              )}
            >
              <p className={classNames('text-[10px]')}>Downloaded</p>
            </div>
          )}

          <h4 className="text-gray-400 text-xs md:text-sm">
            {format(mediaItemDate, 'EE, MMM dd')} at {format(mediaItemDate, 'p')}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}

export default MediaReleaseItem;
