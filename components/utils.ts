import { endOfMonth, format, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';

// Function used for sending GET requests
export function fetcher(url: string) {
  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}

export function calendarFetcher(url: string, selectedDate: Date, type: string) {
  const startDate = format(startOfMonth(selectedDate), 'yyyy-MM-dd');
  const endDate = format(endOfMonth(selectedDate), 'yyyy-MM-dd');

  return fetch(`${url}?startDate=${startDate}&endDate=${endDate}&type=${type}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}

// Function used for sending POST requests
export function poster<T>(url: string, data: T) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}
// Function for sending PUT requests
export function putter<T>(url: string, data: T) {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}

// Function used for sending DELETE requests
export function deleter(url: string) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json());
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Credit: https://usehooks.com/useDebounce/
// T is a generic type for value parameter, our case this will be string
export function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
