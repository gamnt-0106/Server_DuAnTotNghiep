import mongoose from "mongoose";

const wellcomeSchema =  new mongoose.Schema({
    username : {
        type: String,
        // required: true,
        default:""
    },
    numberphone: {
        type:String,
        // required:true,
        trim: true,
        default:""
    },
    social: {
        type: Array,
        default:""
    },
    reason: {
        type: Array,
        default:""
    },
    timeStudy:{
        type: Array,
        default:""
    }
},{timestamps:true})

export default mongoose.model("wellcome", wellcomeSchema)