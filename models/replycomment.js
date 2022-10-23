import mongoose from 'mongoose'

const replycommentSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    commentId:{
        type:String
    },
    userId: {
        type: String
    },
    postId: {
        type: String
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
    like: [
        {
            userId: {
                type: String
            },
            status: {
                type: String
            }
        }
    ],
    dislike: [
        {
            userId: {
                type: String
            },
            status: {
                type: String
            }
        }
    ],
    
}, { timestamps: true })

export default mongoose.model('ReplyComment', replycommentSchema);

