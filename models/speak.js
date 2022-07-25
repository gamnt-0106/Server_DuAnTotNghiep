import mongoose from "mongoose";
const { ObjectId } = mongoose

const speakSchema = new mongoose.Schema({
    category:{
        type: ObjectId,
        ref: "Category"
    },
    vocabulary:{
        type: String,
        required: true
    },
    verb:{
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.model("Speak",speakSchema)