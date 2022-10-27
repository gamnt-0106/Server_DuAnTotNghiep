import mongoose from "mongoose";
const { ObjectId } = mongoose;

const answerQuizSchema = new mongoose.Schema(
  {
    quiz: {
      // ObjectId
      type: ObjectId,
      ref: "Quiz",
    },
    answer: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      // required: true,
    },
    wordMeaning: {
      type: String,
      default: "",
    },
    explainAnswer:{
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

export default mongoose.model("AnswerQuiz", answerQuizSchema);
