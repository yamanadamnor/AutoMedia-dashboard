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
export interface ISonarrReleases {
  airDateUtc: Date;
  title: string;
  seriesId: number;
  seasonNumber: number;
  episodeNumber: number;
  series: { title: string; images: { coverType: string; url: string }[] };
}

export interface IRadarrReleases {
  id: number;
  title: string;
  digitalRelease: Date;
  physicalRelease: Date;
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
