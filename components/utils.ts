// Function used for sending GET requests
export const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());

// Function used for sending POST requests
export const poster = <T>(url: string, data: T) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
};

// Function used for sending DELETE requests
export const deleter = (url: string) => {
  return fetch(url, { method: 'DELETE', headers: { 'content-type': 'application/json' } }).then(
    (res) => res.json(),
  );
};
