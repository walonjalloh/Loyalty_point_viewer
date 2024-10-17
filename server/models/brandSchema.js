import mongoose from "mongoose";
const Schema = mongoose.Schema

const brandSchema = new Schema({
    brandname:{
        type:String,
        required:true,
    },
    brandpassword: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    refreshToken: {
        type:String,
        default:" ",
        required:true
    },
    rewards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reward'
    }]
})

const Brand  = mongoose.model('Brand',brandSchema)

export default Brand