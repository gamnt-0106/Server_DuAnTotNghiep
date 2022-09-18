import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
    // Từ
    words:{
        required: true,
        type: String
    },
    // Ý nghĩa
    meaning:{
        required: true,
        type: String
    },
    // Loại từ
    wordForm:{
        required: true,
        type: String
    },
    // Ảnh
    image:{
        type: String,
        // required: true
    }
}, {timestamps: true})

export default mongoose.model("Vocabulary", vocabularySchema)