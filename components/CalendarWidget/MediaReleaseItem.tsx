import { format } from 'date-fns';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { IMediaReleaseItem } from '../interfaces';

function MediaReleaseItem({
  mediaItemTitle,
  mediaItemDesc,
  mediaItemType,
  mediaItemDate,
  mediaImages,
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
          {mediaItemType === 'sonarr' && (
            <h3 className="text-xs md:text-sm font-bold text-blue-400">{mediaItemDesc}</h3>
          )}
          {mediaItemType === 'radarr' && (
            <h3 className="text-xs md:text-sm font-bold text-orange-400">{mediaItemDesc}</h3>
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
