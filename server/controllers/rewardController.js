import Reward from "../models/rewardSchema.js";
import UserRewards from "../models/userReward.js";
import Brand from "../models/brandSchema.js";


const createReward = async (req, res) => {
  try {
    const { brandId, rewardName, rewardDescription, pointsNeeded } = req.body;


    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const newReward = new Reward({
      brandId,
      rewardName,
      rewardDescription,
      pointsNeeded,
    });


    const savedReward = await newReward.save();


    brand.rewards.push(savedReward._id);
    await brand.save();

    res.status(201).json(savedReward);
  } catch (error) {
    console.error("Error creating reward:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const getAllRewards = async (req, res) => {
  try {
    const rewards = await Reward.find({});

    if (!rewards.length) {
      return res
        .status(404)
        .json({ message: "No rewards found for this brand" });
    }

    res.status(200).json(rewards);
  } catch (error) {
    console.error("Error fetching rewards:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const deleteAReward = async (req, res) => {
  try {
    const { rewardId } = req.params;

    
    const deletedReward = await Reward.findByIdAndDelete(rewardId);

    if (!deletedReward) {
      return res.status(404).json({ message: "Reward not found" });
    }

    await Brand.findByIdAndUpdate(deletedReward.brandId, {
      $pull: { rewards: rewardId },
    });

    res.status(200).json({ message: "Reward deleted successfully" });
  } catch (error) {
    console.error("Error deleting reward:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateReward = async (req, res) => {
    try {
        const { rewardId, userId } = req.params;
        const { rewardName, rewardDescription, pointsNeeded, completed } = req.body;

        
        const updatedReward = await Reward.findByIdAndUpdate(
            rewardId,
            {
                rewardName,
                rewardDescription,
                pointsNeeded,
                completed
            },
            { new: true } 
        );

        if (!updatedReward) {
            return res.status(404).json({ message: 'Reward not found' });
        }

        
        let userReward = await UserRewards.findOne({ userId, brandId: updatedReward.brandId });
        
        if (!userReward) {
            
            userReward = new UserRewards({
                userId,
                brandId: updatedReward.brandId,
                points: pointsNeeded 
            });
        } else {
            
            userReward.points += pointsNeeded;
        }

    
        await userReward.save();

        res.status(200).json({
            message: 'Reward updated and points added to user successfully!',
            updatedReward,
            userReward
        });
    } catch (error) {
        console.error('Error updating reward and adding points:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export { createReward, getAllRewards, deleteAReward, updateReward };
