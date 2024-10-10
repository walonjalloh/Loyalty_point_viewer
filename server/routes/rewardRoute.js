import express from 'express'
import { createReward,updateReward,deleteAReward,getAllRewards } from "../controllers/rewardController.js"

const rewardRouter = express.Router()

rewardRouter.route('/:id').get(getAllRewards)
rewardRouter.route('/create_reward').post(createReward)
rewardRouter.route('/:id').delete(deleteAReward)
rewardRouter.route('/:id/user/:id').put(updateReward)

export {
    rewardRouter
}