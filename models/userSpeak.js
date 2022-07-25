import mongoose from "mongoose";
const { ObjectId } = mongoose

const userSpeakSchema = new mongoose.Schema({
    speak:{
        type: ObjectId,
        ref: "Speak"
    },
    history:{
        type: ObjectId,
        ref: "History"
    },
    answerSpeak:{
        type: ObjectId,
        ref: "AnswerSpeak"
    },
    score:{
        type: Number,
        required: true
    },
    audio:{
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.model("UserSpeak",userSpeakSchema)