import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand', // Reference to the Brand model
        required: true,
    },
    rewardName: {
        type: String,
        required: true,
    },
    rewardDescription: {
        type: String,
        required: true,
    },
    pointsNeeded: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Reward = mongoose.model('Reward',rewardSchema)
export default Reward