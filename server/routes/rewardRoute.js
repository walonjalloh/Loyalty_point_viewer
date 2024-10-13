import express from 'express'
import { createReward,updateReward,deleteAReward,getAllRewards } from "../controllers/rewardController.js"

const rewardRouter = express.Router()

rewardRouter.route('/').get(getAllRewards)
rewardRouter.route('/create').post(createReward)
rewardRouter.route('/:brandId').delete(deleteAReward)
rewardRouter.route('/:rewardId/user/:userId').put(updateReward)

export {
    rewardRouter
}