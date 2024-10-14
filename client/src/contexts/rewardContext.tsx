import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { Reward,ContextProp,RewardProp, CreateReward } from "../utils/types/UsedTypes";
import { getAllReward, rewardCreaate } from "../utils/url/url";
import { toast } from "react-toastify";


//creating the context

const RewardContext = createContext<RewardProp | undefined>(undefined)

export const RewardProvider = ({ children }:ContextProp) => {
    const [reward, setReward] = useState<Reward[]>([])
    const [rewardName, setRewardName] = useState<string>("");
    const [rewardDescription, setRewardDescription] = useState<string>("");
    const [pointsNeeded, setPointsNeeded] = useState<number  | undefined>();
    const [brandId, setBrandId] = useState<string>("");


    const handleCreateReward = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        try {
            const newReward:CreateReward = {
                rewardName,
                rewardDescription,
                pointsNeeded,
                brandId
            }
            await axios.post(rewardCreaate,newReward)
            toast('reward created successfully')
            setBrandId('')
            setRewardDescription('')
            setRewardName('')
            setPointsNeeded(0)
        }catch(error){
            console.log(`error occurred ${error}`)
            toast('reward creation failed')
            setBrandId('')
            setRewardDescription('')
            setRewardName('')
            setPointsNeeded(0)
        }
    }

    useEffect(()=>{
        const getRewards = async():Promise<void> => {
            try {
                const response =  await axios.get(getAllReward)
                console.log(`data retrived successfully ${response}`)
                setReward(response.data)
            }catch(error){
                console.log(`Error occurred ${error}`)
            }
        }

        getRewards()
    },[])

    return(
        <RewardContext.Provider value={{
            reward,
            brandId,
            rewardDescription,
            rewardName,
            setBrandId,
            setPointsNeeded,
            setRewardDescription,
            setRewardName,
            handleCreateReward,
            pointsNeeded
        }}>
            {children}
        </RewardContext.Provider>
    )
}

export default RewardContext