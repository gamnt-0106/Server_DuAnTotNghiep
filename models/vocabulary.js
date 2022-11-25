import mongoose from "mongoose";
const { ObjectId } = mongoose
const vocabularySchema = new mongoose.Schema({
    // Từ
    words: {
        required: true,
        type: String
    },
    // Ý nghĩa
    meaning: {
        required: true,
        type: String
    },
    // Loại từ
    wordForm: {
        required: true,
        type: String
    },
    // Ảnh
    image: {
        type: String,
        // required: true
    },
    pa: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    },
    exampleDirection:{
        type:String,
        default:""
    },
    // Cụm từ
    sentences:{
        type: ObjectId,
        ref: "Day"
    },
    actityId: {
        type: ObjectId,
        ref: "PracticeActivity"
    },

}, { timestamps: true })

export default mongoose.model("Vocabulary", vocabularySchema)