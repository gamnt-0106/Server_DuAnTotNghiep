import mongoose from "mongoose";
import { stringify } from "uuid";
const { ObjectId } = mongoose

const listenWriteSchema = new mongoose.Schema({
    area: {
        type: String,
    },
    practiceActivity: {
        type: ObjectId,
        ref: "PracticeActivity"
    },
    content: [
        {
            name: {
                type: String,
            },
            text: {
                type: String,
            },
            answer: {
                type: Array,
            }
        }
    ],

    // order:{
    //     type: Number,
    //     required:true
    // },
    audio:{
        type: String,
    },
    structure:{
      type: String,
    }
}, { timestamps: true })

export default mongoose.model("ListenWrite", listenWriteSchema)