import mongoose from "mongoose";
const { ObjectId } = mongoose

const historySchema = new mongoose.Schema({
    user:{
        type: ObjectId,
        ref: "User"
    },
    score:{
        type: ObjectId,
        ref: "Score"
    },
    totalScore:{
        type: Number,
        required: true
    },
    experience:{
        type: Number,
        required: true
    }
})

export default mongoose.model("History",historySchema)