import { format, formatISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import type { MediaCover, MediaType } from "pages/api/modules/calendar";
import { Button } from "@/ui/Button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/ui/Tooltip";
import { cn } from "@/utils/cn";

type MediaReleaseItemProps = {
	title: string;
	description?: string;
	releaseDate?: Date;
	images?: MediaCover[];
	isAvailable: boolean;
	mediaType: MediaType;
};

function MediaReleaseItem({
	title,
	description,
	releaseDate,
	images,
	isAvailable,
	mediaType,
}: MediaReleaseItemProps) {
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

	const poster = images?.find((image) => image.coverType === "poster");

	return (
		<div className="overflow-hidden">
			<motion.div
				layout
				variants={variants}
				initial="hideItem"
				animate="showItem"
				exit="hideItem"
				className="grid grid-cols-media-item gap-x-4"
			>
				{poster?.remoteUrl && (
					<div className="relative aspect-2/3 w-12 overflow-hidden md:w-20">
						<Image src={poster.remoteUrl} fill alt="Media poster" />
					</div>
				)}

				<div>
					<h2 className="text-md font-bold md:text-xl">{title}</h2>
					<h3
						className={cn(
							"text-xs font-bold md:text-sm",
							mediaType === "tv" ? "text-blue-400" : "",
							mediaType === "movie" ? "text-orange-400" : "",
						)}
					>
						{description}
					</h3>

					{isAvailable && (
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

					{releaseDate ? (
						<time
							dateTime={formatISO(releaseDate)}
							className="block text-xs text-gray-400 md:text-sm"
						>
							{format(releaseDate, "EE, MMM dd")} at {format(releaseDate, "p")}
						</time>
					) : (
						<p className="block text-xs text-gray-400 md:text-sm">
							Unknown date
						</p>
					)}
				</div>
			</motion.div>
		</div>
	);
}

export default MediaReleaseItem;
