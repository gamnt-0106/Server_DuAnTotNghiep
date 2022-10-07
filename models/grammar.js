import mongoose from "mongoose";

const grammarSchema = new mongoose.Schema({
    name:{
      type: String,
      require: true  
    },
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

