require("dotenv").config()
const express = require('express');
const connectDB = require("./config/db");
const cors=require("cors")
const AuthRoutes=require("./Routes/AuthRoutes")
const candidateRoutes=require("./Routes/CandidateRoutes")
const DashboardRoutes=require("./Routes/DashboardRoutes")
const InterviewRoutes=require("./Routes/InterviewRoutes")

const app=express();

app.use(cors());
app.use(express.json());


app.use("/api/auth",AuthRoutes)
app.use("/api/interviewer",InterviewRoutes)
app.use("/api/dashboard",DashboardRoutes)
app.use("/api/candidate",candidateRoutes)


const main =()=>{
    connectDB();
    app.listen(process.env.PORT,()=>{
    console.log("server has started");
})
}

main();