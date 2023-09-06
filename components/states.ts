import { atom } from "jotai";
import { startOfToday } from "date-fns";
import type { IRadarrReleases, ISonarrReleases } from "./interfaces";

const today = startOfToday();
const selectedDate = atom(today);

const sonarrMedias = atom<ISonarrReleases[]>([]);
const radarrMedias = atom<IRadarrReleases[]>([]);
const settingsModalAtom = atom(false);
const commandMenuAtom = atom(false);
const serviceModalAtom = atom(false);

export {
  settingsModalAtom,
  commandMenuAtom,
  serviceModalAtom,
  selectedDate,
  sonarrMedias,
  radarrMedias,
};
