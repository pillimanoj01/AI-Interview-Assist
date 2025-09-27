

const CandidateModel = require("../Models/CandidateModel");
const InterviewModel = require("../Models/InterviewModel")
const { v4: uuidv4 } = require('uuid');


const createInterview= async(req,res)=>{
    try {
        const {name,description}=req.body
        const userId=req.userId;

        console.log(userId)

        const uniqueId=uuidv4();

        const interview= new InterviewModel({
            name:name,
            description:description,
            interviewerId:userId,
            interviewId:uniqueId,
            status:"open",
        })

        await interview.save();

        res.json({
            mesaage:"Sucessfully created interview"
        })
    } catch (error) {
        console.log(error);
        res.json({
            message:"Something Went Wrong!!"
        })
    }
}

const getAllInterviews= async(req,res)=>{
   try {
        const userId=req.userId;
        console.log(userId)

        const interviews= await InterviewModel.find({interviewerId:userId});

        res.status(200).json({
            message:"Sucessfully fetched all interviews",
            interviews
        })
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong!!"
        })
   }
}

const getInterview=async(req,res)=>{
    try {
        const {interviewId}=req.params
   

    const interview= await InterviewModel.findOne({interviewId:interviewId},{name:1,description:1,status:1});

    if(!interview){
        return res.json({
            mesaage:"Something Went Wrong!!"
        })
    }
    console.log("yes")
    const candidates = await CandidateModel.find({interviewId:interviewId},{name:1,email:1,finalScore:1,_id:1});

    if(!candidates){
       return  res.json({
            message:"no candidates have given the test yet"
        })
    }

    res.status(200).json({
        interview,
        candidates
    })
    } catch (error) {
        console.log(error);
        res.json({
            message:"Something Went Wrong!!"
        })
    }

}





const getCandidate=async (req,res)=>{
   try {
     const {interviewId,candidateId}=req.params


    const candidate = await CandidateModel.findOne({interviewId:interviewId,_id:candidateId})

    res.status(200).json({
        candidate
    })
   } catch (error) {
     console.log(error);
        res.json({
            message:"Something Went Wrong!!"
        })
   }


}

module.exports={createInterview,getAllInterviews,getInterview,getCandidate};