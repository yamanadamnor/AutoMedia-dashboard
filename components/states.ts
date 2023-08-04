import { atom } from 'jotai';
import { startOfToday } from 'date-fns';
import type { IRadarrReleases, ISonarrReleases } from './interfaces';

const today = startOfToday();
const selectedDate = atom(today);
const isThisMonth = atom(true);

const AddServiceModalAtom = atom(false);
const isEditMode = atom(false);
const editServiceIdAtom = atom(0);
const sonarrMedias = atom<ISonarrReleases[]>([]);
const radarrMedias = atom<IRadarrReleases[]>([]);

export {
  AddServiceModalAtom,
  isEditMode,
  editServiceIdAtom,
  selectedDate,
  isThisMonth,
  sonarrMedias,
  radarrMedias,
};
