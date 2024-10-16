import { useContext } from "react";
import RewardContext from "../contexts/rewardContext";

const useReward = () => {
    return useContext(RewardContext)
}

export default useReward