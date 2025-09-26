const mongoose=require("mongoose");


async function connectDB(){
    await mongoose.connect(process.env.DBURL)
    console.log("DB connected");
}

module.exports=connectDB;