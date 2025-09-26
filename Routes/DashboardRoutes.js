const express=require("express");

const router=express.Router();


router.get("/candidate/:interviewId",getAllCandidates);

router.get("/candidate/:interviewId/:candidateId",getCandidate);