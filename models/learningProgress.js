import mongoose from 'mongoose'
const { ObjectId } = mongoose
const learningProgressSchema = new mongoose.Schema({
    listeningSpeakingScore:{
        type: Number,
    },
    vocabularyScore: {
        type: Number,
    },
    structureSentencesScore: {
        type: Number,
    },
    conversationScore: {
        type: Number,
    },
    grammarScore: {
        type: Number,
    },
    isPass: {
        type: Boolean,
        default: false
    },
    order: {
        type: String,
    },
    day: {
        type: ObjectId,
        ref: "Day"
    },
    user: {
        type: ObjectId,
        ref: "User"
    }
    
}, {timestamps: true})

export default mongoose.model('LearningProgress', learningProgressSchema);