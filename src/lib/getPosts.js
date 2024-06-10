import { client } from "./sanity";

export async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
      ...,
          title, 
          description,
          "currentSlug": slug.current,
          createdAt
        }`;
  const posts = await client.fetch(query);
  return posts;
}
