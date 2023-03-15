import { Prisma, Service } from '@prisma/client';
import { SignInResponse } from 'next-auth/react';
import { StaticImageData } from 'next/image';

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

export interface IServiceShelf {
  services: Service[];
  inEdit: boolean;
}

export interface ISonarrReleases {
  airDateUtc: Date;
  title: string;
  seriesId: number;
  seasonNumber: number;
  episodeNumber: number;
  hasFile: boolean;
  series: { title: string; images: { coverType: string; url: string }[] };
}

export interface IRadarrReleases {
  id: number;
  title: string;
  digitalRelease: Date;
  physicalRelease: Date;
  hasFile: boolean;
  images: { coverType: string; url: string }[];
}

export interface IMediaReleaseInfo {
  sonarrReleases: ISonarrReleases[];
  radarrReleases: IRadarrReleases[];
  selectedDay: Date;
}

export interface IMediaReleaseItem {
  mediaItemTitle: string;
  mediaItemDesc: string;
  mediaImages: { coverType: string; url: string }[];
  mediaItemDate: Date;
  mediaItemType: 'sonarr' | 'radarr';
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
  type: 'signin' | 'signout';
  clickHandler: () => Promise<SignInResponse> | Promise<undefined>;
  message: string;
}

type HeroIcon = React.ComponentType<React.ComponentProps<'svg'>>;

export interface IMenuItem {
  buttonText: string;
  Icon: HeroIcon;
  onClick: (e: React.MouseEvent) => void;
}
