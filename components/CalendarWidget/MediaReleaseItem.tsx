import { format, formatISO } from 'date-fns';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { IMediaReleaseItem } from '../interfaces';
import { classNames } from '../utils';

function MediaReleaseItem({
  mediaItemTitle,
  mediaItemDesc,
  mediaItemType,
  mediaItemDate,
  mediaImages,
  mediaHasFile,
}: IMediaReleaseItem) {

  const releaseItemVariant = {
    hidden: {
      opacity: 0,
      height: 0,

    },
    show: {
      opacity: 1,
      height: 'auto',
    },
  }
  const transition = { opacity: { duration: 0.4 } }

  return (
    <motion.div variants={releaseItemVariant} initial="hidden" animate="show" transition={transition}>
      < div className="grid grid-cols-mediaItem gap-x-4" >
        {
          mediaImages.map((image) => {
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
          })
        }

        < div >
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

          {
            mediaHasFile && (
              <div
                className={classNames(
                  'inline-block px-2 py-1 my-2 rounded-full',
                  mediaItemType === 'sonarr' ? 'bg-blue-400' : '',
                  mediaItemType === 'radarr' ? 'bg-orange-400' : '',
                )}
              >
                <p className={classNames('text-[10px]')}>Downloaded</p>
              </div>
            )
          }

          <time dateTime={formatISO(mediaItemDate)} className="block text-gray-400 text-xs md:text-sm">
            {format(mediaItemDate, 'EE, MMM dd')} at {format(mediaItemDate, 'p')}
          </time>
        </div >
      </div >
    </motion.div >
  );
}

export default MediaReleaseItem;
