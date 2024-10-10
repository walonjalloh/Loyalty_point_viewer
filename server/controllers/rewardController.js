import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Reward from "../models/rewardSchema";
import UserRewards from "../models/userReward";
import User from "../models/userSchema";
import Brand from "../models/brandSchema";


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
    const { brandId } = req.params;

    
    const rewards = await Reward.find({ brandId });

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
        const { rewardId, userId } = req.params; // Get rewardId and userId from request params
        const { rewardName, rewardDescription, pointsNeeded, completed } = req.body;

        // Find and update the reward by ID
        const updatedReward = await Reward.findByIdAndUpdate(
            rewardId,
            {
                rewardName,
                rewardDescription,
                pointsNeeded,
                completed
            },
            { new: true } // Return the updated document
        );

        if (!updatedReward) {
            return res.status(404).json({ message: 'Reward not found' });
        }

        // Find or create UserRewards entry for the user and brand
        let userReward = await UserRewards.findOne({ userId, brandId: updatedReward.brandId });
        
        if (!userReward) {
            // If no UserRewards entry exists for the user, create a new one
            userReward = new UserRewards({
                userId,
                brandId: updatedReward.brandId,
                points: pointsNeeded // Set the initial points to the points needed for the reward
            });
        } else {
            // If the UserRewards entry exists, add the points
            userReward.points += pointsNeeded;
        }

        // Save the user reward points
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
