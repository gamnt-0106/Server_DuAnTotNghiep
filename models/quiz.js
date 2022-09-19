import mongoose from "mongoose";
const { ObjectId } = mongoose

const quizSchema = new mongoose.Schema({
    category:{
        type: ObjectId,
        ref:"Category"
    },
    question:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    timeLimit:{
        type: Number,
        required: true
    },
    type:{
        type: Number,
        required: true
    }
},{timestamps:true})

export default mongoose.model("Quiz",quizSchema)