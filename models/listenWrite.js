import mongoose from "mongoose";
import { stringify } from "uuid";
const { ObjectId } = mongoose

const listenWriteSchema = new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
<<<<<<< HEAD
    content: [
        {
            name: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
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
    audio: {
=======
    audio:{
>>>>>>> a05a844ab792be9c9ab187c42922fcbda25dc3d1
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("ListenWrite", listenWriteSchema)