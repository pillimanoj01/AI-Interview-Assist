const {z,email,json, jwt} = require("zod");
const UserModel = require("../Models/UserModel");
const bcrypt=require("bcrypt");
const jwt2=require("jsonwebtoken");


const signup=async(req,res)=>{
    try {
    const {name,email,password}=req.body;

    const user= await UserModel.findOne({email:email});

    if(user){
        return res.status(400).json({
            message:"User Already exist"
        })
    }

    const interviewer = z.object({
        name:z.string(),
        email:z.email(),
        password:z.string().min(8, "Password must be at least 8 characters long").max(20, "Password must be no more than 20 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    })

    const parsedInterviewer=interviewer.safeParse({
        name:name,
        email:email,
        password:password
    })

    if(parsedInterviewer.success){
         const hasedPassword = await bcrypt.hash(parsedInterviewer.data.password,10)
        const newInterviewer= new UserModel({
            name:parsedInterviewer.data.name,
            email:parsedInterviewer.data.email,
            password:hasedPassword
        })

        await newInterviewer.save();
        console.log("new Interviwer Saved");
        res.status(200).json({
            message:"successfully sigup completed"
        })
        
    }
    } catch (error) {
        console.log(error);
         res.json({
            message:parsedStudent.error.issues.map(issue=>issue.message)
        })
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user =await UserModel.findOne({email:email})

        console.log(user)
        if(!user){
            res.status(404).json({
                message:"No credentials Found"
            })
        }
        console.log(password);
        console.log(user.password);
        const checkedPassword = bcrypt.compare(password,user.password)

        if(!checkedPassword){
            res.status(400).json({
                message:"Incorrect Password!"
            })
        }

        const token = await jwt2.sign({
            id:user._id,
            email:user.email
        },process.env.JWT_SECRECT)

        res.status(200).json({
            token,
            message:"Sucessfully loged in user"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong!!"
        })
    }
}

module.exports={signup,login}






