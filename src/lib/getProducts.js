import { client, groq } from "./sanity";

export async function fetchProducts() {
  const query = ` *[_type == "product"] {
      _id,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      'extraImages':extraImages[].asset->url,
      price,
      description,
      colors, 
      'createdAt':createdAt

    }`;
  const product = await client.fetch(query);
  return product;
}

export async function getProductBySlug(slug) {
  const query = ` *[_type == "product" && slug.current == '${slug}'] {
      _id,
      name,
      slug,
      'slug': slug.current,
      'image': image.asset->url,
      'extraImages':extraImages[].asset->url,
      price,
      sizes,
      description,
      colors, 
      'createdAt':createdAt

    }[0]
    `;
  const product = await client.fetch(query);
  return product;
}
