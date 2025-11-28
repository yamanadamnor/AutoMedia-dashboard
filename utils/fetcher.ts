// Function used for sending GET requests
export const fetcher = (url: string) => {
	return fetch(url, {
		method: "GET",
		headers: { "content-type": "application/json" },
	}).then((res) => res.json());
};
