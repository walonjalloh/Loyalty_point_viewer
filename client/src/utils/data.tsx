interface Reward {
  rewardName:string,
  rewardDescription:string,
  pointsNeeded:number
}



const data:Reward[] = [
    {
      rewardName: "1000 Points Reward",
      rewardDescription: "Redeem for a free product",
      pointsNeeded: 1000,
    },
    {
      rewardName: "500 Points Reward",
      rewardDescription: "Get a discount on your next purchase",
      pointsNeeded: 500,
    },
    {
      rewardName: "250 Points Reward",
      rewardDescription: "Free shipping on your next order",
      pointsNeeded: 250,
    },
    {
      rewardName: "100 Points Reward",
      rewardDescription: "Exclusive access to new products",
      pointsNeeded: 100,
    },
    {
      rewardName: "50 Points Reward",
      rewardDescription: "Early access to sales and promotions",
      pointsNeeded: 50,
    },
  ];

  export {
    data
  }

  export type {
    Reward
  }