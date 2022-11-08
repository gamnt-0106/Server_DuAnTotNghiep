import mongoose from "mongoose";
import replycomment from "./replycomment";

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
    },
    author: {
      type: String,
    },
    avatar: {
      type: String,
    },
    like: [
      {
        userId: {
          type: String,
        },
        status: {
          type: String,
        },
      },
    ],
    dislike: [
      {
        userId: {
          type: String,
        },
        status: {
          type: String,
        },
      },
    ],
    rating: {
      type: Number,
    },
    reply: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: replycomment,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
