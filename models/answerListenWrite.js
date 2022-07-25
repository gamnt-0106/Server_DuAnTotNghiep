import mongoose from "mongoose";
const { ObjectId } = mongoose

const answerListenWriteSchema = new mongoose.Schema({
    listenWrite:{
        type: ObjectId,
        ref: "ListenWrite"
    },
    content:{
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.model("AnswerListenWrite",answerListenWriteSchema)