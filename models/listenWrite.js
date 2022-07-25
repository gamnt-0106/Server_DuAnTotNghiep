import mongoose from "mongoose";
const { ObjectId } = mongoose

const listenWriteSchema = new mongoose.Schema({
    category:{
        type: ObjectId,
        ref: "Category"
    },
    name:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    order:{
        type: Number,
        required:true
    },
    audio:{
        type: String,
        required:true
    }
})

export default mongoose.model("ListenWrite",listenWriteSchema)