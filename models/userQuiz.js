import mongoose from "mongoose";
const { ObjectId } = mongoose

const userQuizSchema = new mongoose.Schema({
    quiz:{
        type: ObjectId,
        ref: "Quiz"
    },
    history:{
        type: ObjectId,
        ref: "History"
    },
    answerQuiz:{
        type: ObjectId,
        ref: "AnswerQuiz"
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

export default mongoose.model("UserQuiz",userQuizSchema)