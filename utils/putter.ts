// Function used for sending POST requests
export function poster<T>(url: string, data: T) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
}
