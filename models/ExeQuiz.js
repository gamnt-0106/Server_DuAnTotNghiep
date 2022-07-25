import mongoose from "mongoose";

const exeQuizSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    correctAnswer:{
        type: Boolean,
        required: true
    },
    timeLimit:{
        type: Date,
        required: true
    }

})

export default mongoose.Model('ExeQuiz', exeQuizSchema)