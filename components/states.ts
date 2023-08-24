import { atom } from "jotai";
import { startOfToday } from "date-fns";
import type { IRadarrReleases, ISonarrReleases } from "./interfaces";

const today = startOfToday();
const selectedDate = atom(today);

const AddServiceModalAtom = atom(false);
const isEditMode = atom(false);
const editServiceIdAtom = atom(0);
const sonarrMedias = atom<ISonarrReleases[]>([]);
const radarrMedias = atom<IRadarrReleases[]>([]);
const settingsModalAtom = atom(false);
const commandMenuAtom = atom(false);

export {
  settingsModalAtom,
  commandMenuAtom,
  AddServiceModalAtom,
  isEditMode,
  editServiceIdAtom,
  selectedDate,
  sonarrMedias,
  radarrMedias,
};
