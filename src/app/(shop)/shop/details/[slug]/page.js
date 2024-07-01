import Header from "../../components/Header";
import Details from "../../components/Details";
import { getProductBySlug } from "../../../../../lib/getProducts";

export const revalidate = 30;

export default async function page({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />
      <div>
        <Details product={product} />
      </div>
    </div>
  );
}
