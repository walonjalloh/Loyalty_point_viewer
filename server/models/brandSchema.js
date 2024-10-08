import mongoose from "mongoose";
const Schema = mongoose.Schema

const brandSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    rewards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reward'
    }]
})

const Brand  = mongoose.model('Brand',brandSchema)

export default Brand