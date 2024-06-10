import { client } from "./sanity";

export async function fetchYear() {
  const query = `*[_type == "year"]{
    tourRange,
    tourYear
  } `;
  const year = await client.fetch(query);
  return year;
}
