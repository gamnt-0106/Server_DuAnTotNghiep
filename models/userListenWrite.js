import mongoose from "mongoose";
const { ObjectId } = mongoose

const userListenWriteSchema = new mongoose.Schema({
    answerListenWrite:{
        type: ObjectId,
        ref: "Quiz"
    },
    history:{
        type: ObjectId,
        ref: "History"
    },
    answerListenWrite:{
        type: ObjectId,
        ref: "AnswerListenWrite"
    },
    time:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true
    },

},{timestamps:true})

export default mongoose.model("UserListenWrite",userListenWriteSchema)