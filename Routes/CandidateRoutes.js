const express=require("express");

const router=express.Router();

const postInterview=require("../Controllers/CandidateControllers")


router.post("/interview/post",postInterview);


module.exports=router;