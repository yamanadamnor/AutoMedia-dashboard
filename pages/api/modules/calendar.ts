/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { NextApiRequest, NextApiResponse } from "next";

type MediaCoverTypes =
  | "unknown"
  | "poster"
  | "banner"
  | "fanart"
  | "screenshot"
  | "headshot"
  | "clearlogo";

export type MediaCover = {
  coverType: MediaCoverTypes;
  url: string;
  rmooteUrl: string;
};
type RatingType = "user" | "critic";

type RatingChild = {
  votes: number;
  value: number;
  type: RatingType;
};

type Ratings = {
  imdb: RatingChild;
  tmdb: RatingChild;
  metacritic: RatingChild;
  rottenTomatoes: RatingChild;
};
type SonarrAlternativeTitle = {
  title: string;
  seasonNumber: number;
  sceneSeasonNumber: number;
  sceneOrigin: string;
  comment: string;
};

type SeriesStatusType = "continuing" | "ended" | "upcoming" | "deleted";

type Series = {
  id: number;
  title: string;
  alternateTitles: SonarrAlternativeTitle[];
  sortTitle: string;
  status: SeriesStatusType;
  ended: boolean;
  profileName: string;
  overview: string;
  nextAiring: string;
  previousAiring: string;
  network: string;
  airTime: string;
  images: MediaCover[];
  grabbed: boolean;
  // TODO: Complete
};

export type SonarrResponse = {
  id: number;
  seriesId: number;
  tvdbId: number;
  episodeFileId: number;
  seasonNumber: number;
  episodeNumber: number;
  title: string;
  airDate: string;
  airDateUtc: string;
  runtime: number;
  finaleType: string;
  overview: string;
  hasFile: boolean;
  monitored: boolean;
  absoluteEpisodeNumber: number;
  sceneAbsoluteEpisodeNumber: number;
  sceneEpisodeNumber: number;
  sceneSeasonNumber: number;
  unverifiedSceneNumbering: boolean;
  endTime: string;
  grabDate: string;
  seriesTitle: string;
  series: Series;
  images: MediaCover[];
  grabbed: boolean;

  // TODO: Complete the type
};

type Language = { id: number; name: string };
type SourceType = "tmdb" | "mappings" | "user" | "indexer";
type RadarrAlternativeTitle = {
  id: number;
  sourceType: SourceType;
  movieMetadataId: number;
  title: string;
  cleanTitle: string;
};

type MovieFile = {
  id: number;
  movieId: number;
  relativePath: string;
  path: string;
  size: number;
  dateAdded: string;
  scheneName: string;
  releaseGroup: string;
  edition: string;
  languages: Language[];
  // TODO: Complete the type
  // https://radarr.video/docs/api/#/Calendar/get_api_v3_calendar:~:text=MovieHistoryEventType-,MovieResource,-%7B
};

export type RadarrResponse = {
  title: string;
  originalTitle: string;
  originalLanguage: Language;
  alternateTitles: RadarrAlternativeTitle[];
  secondaryYearSourceId: number;
  sortTitle: string;
  sizeOnDisk: number;
  status: string;
  overview: string;
  inCinemas: string;
  digitalRelease?: string;
  physicalRelease?: string;
  images: MediaCover[];
  website: string;
  year: number;
  youTubeTrailerId: string;
  studio: string;
  path: string;
  qualityProfileId: number;
  hasFile: boolean;
  movieFileId: number;
  monitored: boolean;
  minimumAvailability: string;
  isAvailable: boolean;
  folderName: string;
  runtime: number;
  cleanTitle: string;
  imdbId: string;
  tmdbId: number;
  titleSlug: string;
  certification: string;
  genres: string[];
  tags: number[];
  added: string;
  ratings: Ratings;
  movieFile: MovieFile;
  popularity: number;
  statistics: {
    movieFileCount: number;
    sizeOnDisk: number;
    releaseGroups: string[];
  };
  id: number;
  // TODO: Complete the type
};

export type MediaType = "tv" | "movie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVICES = {
  sonarr: {
    service: "sonarr",
    port: 8989,
    url: "/api/v3/calendar",
    apiKey: process.env.NEXT_PUBLIC_SONARR_API,
  },
  radarr: {
    service: "radarr",
    port: 7878,
    url: "/api/v3/calendar",
    apiKey: process.env.NEXT_PUBLIC_RADARR_API,
  },
} as const;

async function fetchSonarr(startDate: string, endDate: string) {
  const { port, apiKey, url } = SERVICES.sonarr;
  const requestUrl = `${BASE_URL}:${port}${url}?apikey=${apiKey}&start=${startDate}&end=${endDate}&includeSeries=true`;
  return fetch(requestUrl, {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching Sonarr data");
    }
    return response.json() as Promise<SonarrResponse[]>;
  });
}

async function fetchRadarr(startDate: string, endDate: string) {
  const { port, apiKey, url } = SERVICES.radarr;
  const requestUrl = `${BASE_URL}:${port}${url}?apikey=${apiKey}&start=${startDate}&end=${endDate}`;
  return fetch(requestUrl, {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching Radarr data");
    }
    return response.json() as Promise<RadarrResponse[]>;
  });
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { startDate, endDate, type } = req.query as {
    startDate: string;
    endDate: string;
    type: MediaType;
  };

  if (!startDate || !endDate) {
    return res.status(400).json({
      message: "Missing required parameter in body: startDate and/or endDate",
    });
  }

  switch (type) {
    case "tv":
      try {
        const sonarrResponses = await fetchSonarr(startDate, endDate);
        return res.json(sonarrResponses);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }

        return res.status(500).json({
          message: "An unknown error occurred when fetching Sonarr data",
        });
      }
    case "movie":
      try {
        const radarrResponses = await fetchRadarr(startDate, endDate);
        return res.json(radarrResponses);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
        return res.status(500).json({
          message: "An unknown error occurred when fetching Radarr data",
        });
      }
    default:
      return res
        .status(400)
        .json({ message: "Not allowed type, 'sonarr' or 'radarr'" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    return handleGet(req, res);
  }

  return res.status(405).json({
    statusCode: 405,
    message: "Method not allowed",
  });
}
