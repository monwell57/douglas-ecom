import Header from "../components/Header";
import Details from "../components/Details";

function page() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />
      <div>
        <Details />
      </div>
    </div>
  );
}

export default page;
