import { ToastContainer } from "react-toastify";
import useReward from "../hooks/useReward";
import { FaGift, FaCoins, FaPen, FaIdBadge } from "react-icons/fa"; // Icons added

function CreateReward() {
  const createReward = useReward();

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-xl bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-600 flex items-center justify-center gap-2">
          <FaGift /> Create Reward
        </h2>

        <form onSubmit={createReward?.handleCreateReward} className="space-y-6">
          
          <div className="flex flex-col">
            <label htmlFor="brandId" className="text-sm font-medium mb-2">
              <FaIdBadge className="inline-block mr-1 text-gray-500" />
              Brand ID
            </label>
            <input
              type="text"
              id="brandId"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={createReward?.brandId}
              onChange={(e) => createReward?.setBrandId(e.target.value)}
            />
          </div>

          
          <div className="flex flex-col">
            <label htmlFor="rewardName" className="text-sm font-medium mb-2">
              <FaPen className="inline-block mr-1 text-gray-500" />
              Reward Name
            </label>
            <input
              type="text"
              id="rewardName"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={createReward?.rewardName}
              onChange={(e) => createReward?.setRewardName(e.target.value)}
            />
          </div>

          
          <div className="flex flex-col">
            <label htmlFor="rewardDescription" className="text-sm font-medium mb-2">
              <FaPen className="inline-block mr-1 text-gray-500" />
              Reward Description
            </label>
            <textarea
              id="rewardDescription"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none h-28 resize-none"
              required
              value={createReward?.rewardDescription}
              onChange={(e) => createReward?.setRewardDescription(e.target.value)}
            />
          </div>

          
          <div className="flex flex-col">
            <label htmlFor="pointsNeeded" className="text-sm font-medium mb-2">
              <FaCoins className="inline-block mr-1 text-yellow-500" />
              Points Needed
            </label>
            <input
              type="number"
              id="pointsNeeded"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={createReward?.pointsNeeded}
              onChange={(e) => createReward?.setPointsNeeded(Number(e.target.value))}
            />
          </div>

          
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Reward
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        theme="colored"
      />
    </section>
  );
}

export default CreateReward;
