import { endOfMonth, format, startOfMonth } from "date-fns";

export function calendarFetcher(url: string, selectedDate: Date, type: string) {
  const startDate = format(startOfMonth(selectedDate), 'yyyy-MM-dd');
  const endDate = format(endOfMonth(selectedDate), 'yyyy-MM-dd');

  return fetch(`${url}?startDate=${startDate}&endDate=${endDate}&type=${type}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}
