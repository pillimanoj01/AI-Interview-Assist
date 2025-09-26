const express=require("express");

const router=express.Router();


router.post("/interview",createInterview);

router.get("/interviews",getAllInterviews);

router.get("/interviews/:id",getInterview);

module.exports=router;