import type { Prisma } from "@prisma/client";
import type { StaticImageData } from "next/image";

export interface IService {
  id: string;
  name: string;
  img?: string | StaticImageData;
  link?: string;
  desc: string;
  inEdit?: boolean;
  handleServiceDelete?: () => void;
  handleServiceAdd?: () => void;
}

export interface IServiceCard extends Prisma.ServiceCreateInput {
  id: number;
  inEdit?: boolean;
}

export interface ISonarrReleases {
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
}

export interface IRadarrReleases {
  id: number;
  title: string;
  digitalRelease: Date;
  physicalRelease: Date;
  hasFile: boolean;
  images: { coverType: string; url: string; remoteUrl: string }[];
}

export interface IMediaReleaseInfo {
  sonarrReleases: ISonarrReleases[];
  radarrReleases: IRadarrReleases[];
  selectedDay: Date;
}

export interface IMediaReleaseItem {
  mediaItemTitle: string;
  mediaItemDesc: string;
  mediaImages: { coverType: string; url: string; remoteUrl: string }[];
  mediaItemDate: Date;
  mediaItemType: "sonarr" | "radarr";
  mediaHasFile: boolean;
}

export interface IDayComponent {
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

export interface IBtnKind {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  message: string;
}

// https://github.com/tailwindlabs/heroicons/issues/64#issuecomment-1659901474
type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};
export type HeroIcon = React.FC<IconProps>;

export interface IMenuItem {
  buttonText: string;
  Icon: HeroIcon;
  onClick: (e: React.MouseEvent) => void;
}
