import { client } from "./sanity";
import groq from "groq";

export async function fetchProducts() {
  const query = groq`*[_type == "product"] {
    _id,
    name,
    'slug': slug.current,
    'image': image.asset->url,
    'extraImages': extraImages[].asset->url,
    price,
    description,
    colors,
    'createdAt': createdAt
  }`;
  const products = await client.fetch(query);
  return products;
}

export async function getProductBySlug(slug) {
  const query = groq`*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    'slug': slug.current,
    'image': image.asset->url,
    'extraImages': extraImages[].asset->url,
    price,
    sizes,
    description,
    colors,
    'createdAt': createdAt
  }`;
  const product = await client.fetch(query, { slug });
  return product;
}
