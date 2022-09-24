import mongoose from "mongoose";

const grammarSchema = mongoose.Schema({
    image:{
        type:String,
        require: true
    },
    example:{
        type: String,
        require: true
    },
    note:{
        type: String,
    }
},{timestamps:true});

export default mongoose.model("Grammar", grammarSchema);

