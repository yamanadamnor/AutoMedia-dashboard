import { format, formatISO } from 'date-fns';
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


  const variants = {
    hideItem: {
      height: 0,
      opacity: 0,
      marginBottom: 0,
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      }
    },
    showItem: {
      height: "auto",
      marginBottom: 20,
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      }
    }
  }

  return (
    <div
      className="overflow-hidden"
    >
      <motion.div
        layout
        variants={variants}
        initial="hideItem"
        animate="showItem"
        exit="hideItem"
        className="grid grid-cols-mediaItem gap-x-4">
        {mediaImages.map((image) => {
          if (image.coverType === 'poster') {
            return (
              <div key={image.coverType} className="aspect-2/3 w-12 md:w-20 relative overflow-hidden">
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

          <time
            dateTime={formatISO(mediaItemDate)}
            className="block text-gray-400 text-xs md:text-sm"
          >
            {format(mediaItemDate, 'EE, MMM dd')} at {format(mediaItemDate, 'p')}
          </time>
        </div>
      </motion.div>
    </div >
  );
}

export default MediaReleaseItem;
