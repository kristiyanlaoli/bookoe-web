// booksFetcher.js
const ENDPOINT = "https://bookapi.cm.hmw.lol/api/";

export async function fetchBooksJSON(apiParam) {
  const response = await fetch(`${ENDPOINT}${apiParam}`);
  const data = await response.json();
  return data;
}
