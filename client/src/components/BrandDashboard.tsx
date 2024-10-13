import React, { useState, useEffect } from "react";

interface Reward {
  _id: string;
  rewardName: string;
  pointsNeeded: number;
}

interface Brand {
  name: string;
  rewards: Reward[];
}

const BrandDashboard: React.FC = () => {
  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(() => {
    // Simulate fetching brand data from API
    const fetchBrandData = async () => {
      const data: Brand = {
        name: "Brand A",
        rewards: [
          { _id: "1", rewardName: "10% Discount", pointsNeeded: 50 },
          { _id: "2", rewardName: "Free Shipping", pointsNeeded: 30 },
        ],
      };
      setBrand(data);
    };
    fetchBrandData();
  }, []);

  if (!brand) return <p>Loading...</p>;

  return (
    <section className="p-8  max-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{brand.name} Dashboard</h1>
          <p className="text-gray-600">Manage your rewards and track performance</p>
        </header>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Rewards</h2>
        <div className="space-y-4">
          {brand.rewards.map((reward) => (
            <div
              key={reward._id}
              className="p-4 bg-gray-50 border rounded-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium text-blue-600">
                  {reward.rewardName}
                </h3>
                <p className="text-gray-700">Points Needed: {reward.pointsNeeded}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDashboard;
