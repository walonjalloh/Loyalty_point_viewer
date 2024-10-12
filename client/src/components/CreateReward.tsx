import { useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";

interface CreateReward {
  rewardName: string;
  rewardDescription: string;
  pointsNeeded: number | undefined;
}

function CreateReward() {
  const [rewardName, setRewardName] = useState<string>("");
  const [rewardDescription, setRewardDescription] = useState<string>("");
  const [pointsNeeded, setPointsNeeded] = useState<number  | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const newReward: CreateReward = {
        rewardName,
        rewardDescription,
        pointsNeeded,
      };
      const url = 'http://localhost:3000/api/reward';
      await axios.post(url, newReward);
      toast('Reward created successfully');
      setPointsNeeded(0);
      setRewardDescription('');
      setRewardName('');
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast('Reward creation failed');
      setPointsNeeded(0);
      setRewardDescription('');
      setRewardName('');
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Reward</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="rewardName" className="text-sm font-medium mb-2">
              Reward Name
            </label>
            <input
              type="text"
              id="rewardName"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
              required
              value={rewardName}
              onChange={(e) => setRewardName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rewardDescription" className="text-sm font-medium mb-2">
              Reward Description
            </label>
            <textarea
              id="rewardDescription"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 h-24 resize-none"
              required
              value={rewardDescription}
              onChange={(e) => setRewardDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pointsNeeded" className="text-sm font-medium mb-2">
              Points Needed
            </label>
            <input
              type="number"
              id="pointsNeeded"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
              required
              value={pointsNeeded}
              onChange={(e) => setPointsNeeded(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Reward
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </section>
  );
}

export default CreateReward;