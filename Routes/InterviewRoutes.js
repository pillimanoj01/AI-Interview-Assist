const express=require("express");

const router=express.Router();

const {createInterview,getAllInterviews,getInterview}=require("../Controllers/InterviewControllers")


router.post("/interview",createInterview);

router.get("/interviews",getAllInterviews);

router.get("/interviews/:id",getInterview);

module.exports=router;