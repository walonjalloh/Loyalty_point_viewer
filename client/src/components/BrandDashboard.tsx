import useAuth from "../hooks/useAuth";

function BrandDashboard() {
  const auth = useAuth();
  const brand = auth?.brandAuth;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-5">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Brand Dashboard</h1>
          <p className="text-lg text-gray-500 mt-2">
            Manage your brand information and rewards in one place.
          </p>
        </div>

        {brand?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.map((brand) => (
              <div
                key={brand.brandId}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-blue-600">
                  {brand?.brandname}
                </h2>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Brand ID:</span> {brand.brandId}
                </p>
                <button
                  className="mt-4 w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all"
                >
                  View Rewards
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No brands found. Please log in to manage your brand.
          </p>
        )}
      </section>
    </main>
  );
}

export default BrandDashboard;
