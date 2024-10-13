import { useContext } from 'react';
import RewardContext from '../contexts/rewardContext.tsx';

function ViewReward() {
  const rewardContext = useContext(RewardContext)

  return (
    <section className="bg-gray-100 p-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Available Rewards</p>
        {rewardContext?.reward.length === 0 && <p className="text-red-500">Reward List is empty</p>}
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewardContext?.reward.map(reward => (
          <div key={reward.rewardName} className="bg-white flex flex-col p-4 rounded-md gap-1 shadow-sm">
            <h1 className="text-lg font-medium mb-2">{reward.rewardName}</h1>
            <p className="text-gray-700">{reward.rewardDescription}</p>
            <p className="text-blue-500 font-bold">Points Needed: {reward.pointsNeeded}</p>
            <div className='flex justify-between items-center'>
                <button className='border-2 border-black/50 px-6 py-1 rounded-md font-bold '>view</button>
                <button className='border-2 border-blue-500 bg-blue-500 rounded-md text-white font-bold px-4 py-1 '>claim reward</button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default ViewReward;