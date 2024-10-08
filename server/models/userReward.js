import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userRewardsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand', // Reference to the Brand model
        required: true,
    },
    points: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserRewards = mongoose.model('UserRewards', userRewardsSchema);

export default UserRewards;
