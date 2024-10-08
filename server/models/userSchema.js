import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unqiue:true
    },
    password: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

const User  = mongoose.model('User',userSchema)

export default User