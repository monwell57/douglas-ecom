import Events from "../../components/events/Events";
import Hero from "../..//components/Hero";
import { client } from "../../lib/sanity";
import { Player } from "../../components/Player";
import Albums from "../../components/albums/Albums";
import Blog from "../../components/blog/Blog";
import Newsletter from "../../components/Newsletter";
import { fetchLocations } from "../../lib/data";
import { fetchYear } from "../../lib/fetchYear"; // Import fetchYear function
import { fetchAlbum } from "../../lib/fetchAlbum"; // Import fetchYear function
import { fetchFeaturedTickets } from "../../lib/fetchFeaturedTickets"; // Import fetchYear function
import { fetchSong } from "../../lib/fetchSong"; // Import fetchYear function
// import { getPosts } from "../../lib/getPosts"; // Import fetchYear function

export const revalidate = 30;

// export async function getPosts() {
//   const query = `*[_type == 'post'] | order(_createdAt desc) {
//       ...,
//           title,
//           description,
//           "currentSlug": slug.current,
//           createdAt
//         }`;
//   const posts = await client.fetch(query);
//   return posts;
// }

export default async function Home() {
  const data = await fetchLocations();
  const tourYear = await fetchYear();
  const mainSong = await fetchSong();
  const mainAlbum = await fetchAlbum();
  const mainTickets = await fetchFeaturedTickets();

  return (
    <main className="">
      <Hero data={data} year={tourYear} tickets={mainTickets} />
      <Player song={mainSong} />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
      {/* <div className="h-[4000px]"> </div> */}
    </main>
  );
}
