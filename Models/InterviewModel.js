const mongoose= require("mongoose");
const { required } = require("zod/mini");
const objectId=mongoose.Schema.ObjectId;



const InterviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    interviewerId:{
        type:objectId,
        ref:"userModel",
        required:true
    },
    interviewId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["open","closed"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("interviewModel",InterviewSchema);