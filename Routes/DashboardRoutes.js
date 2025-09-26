const express=require("express");

const router=express.Router();

const {getAllCandidates,getCandidate}=require("../Controllers/DashboardController")


router.get("/candidate/:interviewId",getAllCandidates);

router.get("/candidate/:interviewId/:candidateId",getCandidate);


module.exports=router