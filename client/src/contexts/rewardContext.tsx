import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { Reward,ContextProp,RewardProp } from "../types/UsedTypes";
import { getAllReward } from "../url/url";


//creating the context

const RewardContext = createContext<RewardProp | undefined>(undefined)

export const RewardProvider = ({ children }:ContextProp) => {
    const [reward, setReward] = useState<Reward[]>([])

    useEffect(()=>{
        const getRewards = async():Promise<void> => {
            try {
                const url = getAllReward
                const response =  await axios.get(url)
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
            reward
        }}>
            {children}
        </RewardContext.Provider>
    )
}

export default RewardContext