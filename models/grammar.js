import mongoose from "mongoose";
const {ObjectId} = mongoose
const grammarSchema = new mongoose.Schema({
    name:{
      type: String,
      require: true  
    },
    image:{
        type:String,
        // require: true
        default:""
    },
    description:{
        type: String,
        require: true
    },
    summary:{
        type:String,
        default:""
    },
    dayId:{
        type:ObjectId,
        ref:"Day"
    }
},{timestamps:true});

export default mongoose.model("Grammar", grammarSchema);

