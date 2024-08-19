import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
type CalendarContextValues = {
  selectedDay: Date;
  setSelectedDay: Dispatch<SetStateAction<Date>>;
};

export const CalendarContext = createContext<CalendarContextValues>({
  selectedDay: new Date(),
  setSelectedDay: () => Date,
});
