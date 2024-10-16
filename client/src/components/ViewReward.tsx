import useReward from "../hooks/useReward";

function ViewReward() {
  const rewardContext = useReward();

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Available Rewards
          </h1>
          {rewardContext?.reward.length === 0 && (
            <p className="text-red-500 text-2xl my-10">
              Reward List is empty
            </p>
          )}
        </div>

        
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewardContext?.reward.map((reward) => (
            <div
              key={reward.rewardName}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {reward.rewardName}
              </h2>
              <p className="text-gray-700 mb-4">
                {reward.rewardDescription}
              </p>
              <p className="text-lg text-blue-500 font-bold mb-4">
                Points Needed: {reward.pointsNeeded}
              </p>

              
              <div className="flex justify-between items-center mt-auto">
                <button className="border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-all">
                  View Details
                </button>
                <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition-all">
                  Claim Reward
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}

export default ViewReward;
