import { format, formatISO } from "date-fns";
import Image from "next/image";
import { motion } from "framer-motion";

import type { IMediaReleaseItem } from "@/components/interfaces";
import { cn } from "@/utils/cn";
import { Button } from "@/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/Tooltip";

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
      },
    },
    showItem: {
      height: "auto",
      marginBottom: 20,
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        layout
        variants={variants}
        initial="hideItem"
        animate="showItem"
        exit="hideItem"
        className="grid grid-cols-mediaItem gap-x-4"
      >
        {mediaImages.map((image) => {
          if (image.coverType === "poster") {
            return (
              <div
                key={image.coverType}
                className="relative aspect-2/3 w-12 overflow-hidden md:w-20"
              >
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
          <h2 className="text-md font-bold md:text-xl">{mediaItemTitle}</h2>
          <h3
            className={cn(
              "text-xs font-bold md:text-sm ",
              mediaItemType === "sonarr" ? "text-blue-400" : "",
              mediaItemType === "radarr" ? "text-orange-400" : "",
            )}
          >
            {mediaItemDesc}
          </h3>

          {mediaHasFile && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="my-2 inline-flex items-center gap-x-3 px-3 py-[2px]"
                    disabled
                  >
                    <Image
                      src="/img/jellyfin.svg"
                      width={15}
                      height={15}
                      alt="Jellfin icon"
                    />
                    Play
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-center">
                  <p>
                    Look out for the upcoming <br /> Jellyfin integration
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <time
            dateTime={formatISO(mediaItemDate)}
            className="block text-xs text-gray-400 md:text-sm"
          >
            {format(mediaItemDate, "EE, MMM dd")} at{" "}
            {format(mediaItemDate, "p")}
          </time>
        </div>
      </motion.div>
    </div>
  );
}

export default MediaReleaseItem;
