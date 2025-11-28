// Function used for sending POST requests
export function putter<T>(url: string, data: T) {
	return fetch(url, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: { "content-type": "application/json" },
	}).then((res) => res.json());
}
