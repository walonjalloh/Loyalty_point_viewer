import { FaBuilding, FaIdBadge, FaBoxOpen } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

function BrandDashboard() {
  const auth = useAuth();
  const brand = auth?.brandAuth;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-10 px-5">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-2">
            <FaBuilding className="text-blue-500" /> Brand Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Manage your brand information and rewards all in one place.
          </p>
        </div>

        {brand?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.map((brand) => (
              <div
                key={brand.brandId}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
                  <FaIdBadge /> {brand?.brandname}
                </h2>
                <p className="text-gray-700 mt-2 flex items-center gap-2">
                  <span className="font-semibold">Brand ID:</span> {brand.brandId}
                </p>
                <button
                  className="mt-6 w-full py-2 px-4 flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
                >
                  <FaBoxOpen /> View Rewards
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl mt-12">
            No brands found. Please log in to manage your brand.
          </p>
        )}
      </section>
    </main>
  );
}

export default BrandDashboard;
