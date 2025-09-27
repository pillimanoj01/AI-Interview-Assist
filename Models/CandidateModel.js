const mongoose=require("mongoose");
const { date } = require("zod");
const { required } = require("zod/mini");


const candidateSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    interviewId:{
        type:String,
        required:true,
    },
    resumeURL:{
        type:String,
        required:true
    },
    finalScore:{
        type:Number
    },
    aiSummary:{
        type:String
    },
    responses:[
        {
            index:{
                type:Number
            },
            difficulty:{
                type:String,
                enum:["easy","medium","hard"]
            },
            question:{
                type:String
            },
            answer:{
                type:String,
            },
            aiScore:{
                type:Number
            },
            timeTaken:{
                type:String
            }
        }
    ],
    submitedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("candidateModel",candidateSchema);