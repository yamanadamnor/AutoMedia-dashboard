// Function used for sending DELETE requests
export const deleter = (url: string) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res);
};
