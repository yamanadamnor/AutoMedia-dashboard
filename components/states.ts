import { atom } from 'jotai';
import { startOfToday } from 'date-fns';

const today = startOfToday();
const selectedDate = atom(today);
const isThisMonth = atom(true);

const AddServiceModalAtom = atom(false);
const isEditMode = atom(false);
const editServiceIdAtom = atom(0);
const sonarrMedias = atom([]);
const radarrMedias = atom([]);

export {
  AddServiceModalAtom,
  isEditMode,
  editServiceIdAtom,
  selectedDate,
  isThisMonth,
  sonarrMedias,
  radarrMedias,
};
