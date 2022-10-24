import mongoose from "mongoose";
const { ObjectId } = mongoose

const historySchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    practiceActivity: {
        type: ObjectId,
        ref: "PracticeActivity"
    },
    learningProgress: {
        type: ObjectId,
        ref: "LearningProgress"
    },
    score: {
        type: Number,
        required: true
    },
    totalScore: {
        type: Number,
        required: true
    },
    totalCorrect: {
        type: Number,
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("History", historySchema)