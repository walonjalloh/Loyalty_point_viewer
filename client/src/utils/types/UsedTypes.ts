import { ReactNode } from "react";

interface ContextProp {
  children:ReactNode
}

interface Reward {
  rewardName: string;
  rewardDescription: string;
  pointsNeeded: number;
}

interface Auth {
  fullname?:string,
  username?:string,
  password?:string,
  brandname?:string,
  brandpassword?:string
  
}

interface RewardProp {
  reward:Reward[],
  brandId:string,
  rewardName:string,
  rewardDescription:string,
  pointsNeeded:number | undefined,
  handleCreateReward:(e:React.FormEvent<HTMLFormElement>)=>Promise<void>,
  setBrandId:React.Dispatch<React.SetStateAction<string>>
  setRewardName:React.Dispatch<React.SetStateAction<string>>
  setRewardDescription:React.Dispatch<React.SetStateAction<string>>
  setPointsNeeded:React.Dispatch<React.SetStateAction<number | undefined>>
}

interface CreateReward {
  brandId:string,
  rewardName:string,
  rewardDescription:string,
  pointsNeeded:number | undefined
}

interface AuthContextType extends Auth {
  handleUser:()=>void
  handleBrand:()=>void
  handleUserLogin:(e:React.FormEvent<HTMLFormElement>)=>Promise<void>
  handleBrandLogin: (e:React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleUserSignUp: (e:React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleBrandSignUp: (e:React.FormEvent<HTMLFormElement>) => Promise<void>;
  type:{user:boolean, brand:boolean},
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setBrandName: React.Dispatch<React.SetStateAction<string>>;
  setBrandPassword: React.Dispatch<React.SetStateAction<string>>;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
}

export type {
  Reward,
  Auth,
  ContextProp,
  AuthContextType,
  RewardProp,
  CreateReward
}
