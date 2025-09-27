const jwt = require("jsonwebtoken");

const AuthMiddleware=async(req,res,next)=>{
    const {token}=req.headers;

    const verifiedData=jwt.verify(token,process.env.JWT_SECRECT);
    console.log("hitted!")

    if(verifiedData){
        req.userId=verifiedData.id
        next()
    }
    else{
        res.json({
            message:"Invalid Authorization"
        })
    }
}

module.exports=AuthMiddleware;