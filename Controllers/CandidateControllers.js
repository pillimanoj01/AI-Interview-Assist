const CandidateModel = require("../Models/CandidateModel");


const postInterview= async(req,res)=>{
    try {
    const {name,email,phoneNo,interviewId,responses,resumeURL,finalScore,aiSummary}=req.body;

    const existingCandidate= await CandidateModel.find({email:email,interviewId:interviewId});

    if(existingCandidate){
        return res.status(401).json({
            message:"your response has already been noted!!"
        })
    }
    const candidate = new CandidateModel({
        name,
        email,
        phoneNo,
        responses,
        interviewId,
        resumeURL,
        finalScore,
        aiSummary
    })
        await candidate.save()

    res.json({
        message:"Sucessfully submitted your response"
    })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong!!"
        }) 
    }



}

module.exports=postInterview;