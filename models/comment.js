import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    content: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
    },
    
    author: {
        type: String,
    },
    avatar: {
        type: String
    },
    like: {
        String
    },
    dislike:{
        String
    }
}, { timestamps: true })

export default mongoose.model('Comment', commentSchema);

