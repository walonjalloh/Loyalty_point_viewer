import express from 'express'
import { brandAuth } from '../middleware/brandAuth.js'
import { createReward,updateReward,deleteAReward,getAllRewards } from "../controllers/rewardController.js"
import { userAuth } from '../middleware/userAuth.js'


const rewardRouter = express.Router()

rewardRouter.route('/').get(getAllRewards)
rewardRouter.route('/create').post(brandAuth, createReward)
rewardRouter.route('/:brandId').delete( brandAuth,deleteAReward)
rewardRouter.route('/:rewardId/user/:userId').patch(brandAuth, updateReward)

export {
    rewardRouter
}