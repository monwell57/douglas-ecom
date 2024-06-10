import { client } from "./sanity";

export async function fetchSong() {
  const query = ` *[_type == "featured"] {
      artist,
      featuresong,
      "trackName": track[0].name,
      "fileLocation": track[0].src.asset->url
    }`;
  const song = await client.fetch(query);
  return song;
}
