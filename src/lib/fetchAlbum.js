import { client } from "./sanity";

export async function fetchAlbum() {
  const query = ` *[_type == "album"] {
      _id,
      img,
      name,
      tracks[] {
        name,
        "src": src.asset->url
      }
    }`;
  const album = await client.fetch(query);
  return album;
}
