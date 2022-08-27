import mongoose from "mongoose";

const wellcomeSchema =  new mongoose.Schema({
    username : {
        type: String,
        // required: true,
    },
    numberphone: {
        type:Number,
        // required:true,
        trim: true
    },
    social: {
        type: Array    

    },
    reason: {
        type: Array
    },
    timeStudy:{
        type:Array
    }
},{timestamps:true})

export default mongoose.model("wellcome", wellcomeSchema)