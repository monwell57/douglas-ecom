import React from "react";
import { client } from "../../../../../lib/sanity";
import ImageGallery from "../../components/ImageGallery";
import { Button } from "../../../../../components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "../../components/AddToBag";

export const revalidate = 60;

async function getData(slug) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0] {
    _id,
           images,
           price,
           name,
           description,
           "slug": slug.current,
           "categoryName": category->name,
           price_id
 }`;
  const data = client.fetch(query);
  return data;
}
async function ProductPage({ params }) {
  const data = await getData(params.slug);

  return (
    <div className="bg-white min-h-screen text-black py-6">
      <div className="mx-auto max-w-screen-xl px-4 md:px-0">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="bg-blue-400 rounded-full text-white gap-x-2">
                <span className="text-white text-lg ">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-.5 text-red-500 line-through">
                  ${data.price + 10.01}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Button className="bg-gray-200 text-gray-600 active:text-gray-100">
                Checkout Now
              </Button>
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
