import mongoose from "mongoose";
const { ObjectId } = mongoose;

const sentenceSchema = new mongoose.Schema(
  {
    practiceActivity: {
      type: ObjectId,
      ref: "PracticeActivity",
    },
    words: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    phoneticTranscription: {
      type: String,
      required: true,
    },
    soundCombinations: [
      {
        sound: {
          type: String,
        },
        combinations: Array,
      },
    ],
    structuralAnalysis: {
      type: String,
    },
    grammarAnalysis: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sentences", sentenceSchema);
