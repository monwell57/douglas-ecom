import Header from "../../components/Header";
import Details from "../../components/Details";
import { getProductBySlug } from "../../../../../lib/getProducts";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";

export const revalidate = 30;

export default async function page({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return {
      notFound: true,
    };
  }
  console.log("[DETAILS]", product);
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />
      <div>
        <Details product={product} />
        <Comments product={product} />
      </div>
      <Footer />
    </div>
  );
}
