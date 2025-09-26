const express=require("express");

const router=express.Router();


router.post("/interview/post",postInterview);


module.exports=router;