const express=require("express");

const router=express.Router();

const {createInterview,getAllInterviews,getInterview,getCandidate}=require("../Controllers/DashboardController")


const AuthMiddleware =require("../Middlewares/AuthMiddleware")


router.post("/interview",AuthMiddleware,createInterview);

router.get("/interviews",AuthMiddleware,getAllInterviews);

router.get("/interviews/:interviewId",AuthMiddleware,getInterview);

router.get("/candidate/:interviewId/:candidateId",getCandidate);


module.exports=router