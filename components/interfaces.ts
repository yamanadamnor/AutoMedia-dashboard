import type { StaticImageData } from "next/image";
import type { Prisma } from "@/prisma/generated/client";

export type IService = {
	id: string;
	name: string;
	img?: string | StaticImageData;
	link?: string;
	desc: string;
	inEdit?: boolean;
	handleServiceDelete?: () => void;
	handleServiceAdd?: () => void;
};

export type IServiceCard = {
	id: number;
	inEdit?: boolean;
} & Prisma.ServiceCreateInput;

export type ISonarrReleases = {
	airDateUtc: Date;
	title: string;
	seriesId: number;
	seasonNumber: number;
	episodeNumber: number;
	hasFile: boolean;
	series: {
		title: string;
		images: { coverType: string; url: string; remoteUrl: string }[];
	};
};

export type IRadarrReleases = {
	id: number;
	title: string;
	digitalRelease: Date;
	physicalRelease: Date;
	hasFile: boolean;
	images: { coverType: string; url: string; remoteUrl: string }[];
};

export type IBtnKind = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	message: string;
};

// https://github.com/tailwindlabs/heroicons/issues/64#issuecomment-1659901474
type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
	title?: string;
	titleId?: string;
};
export type HeroIcon = React.FC<IconProps>;

export type IMenuItem = {
	buttonText: string;
	Icon: HeroIcon;
	onClick: (e: React.MouseEvent) => void;
};
