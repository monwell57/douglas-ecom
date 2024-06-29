import Header from "../components/Header";
import Order from "../components/Order";

function page() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />
      <Order />
    </div>
  );
}

export default page;
