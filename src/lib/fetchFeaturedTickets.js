import { client } from "./sanity";

export async function fetchFeaturedTickets() {
  const query = `*[_type == "featuredEventTickets"]{
      url
    } `;
  const ticketsFeature = await client.fetch(query);
  return ticketsFeature;
}
