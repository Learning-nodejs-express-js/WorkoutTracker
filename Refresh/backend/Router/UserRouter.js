const express=require("express")
const bcrypt=require("bcrypt")

const userRouter=express.Router()

//signup
userRouter.post("/signup",async(req,res)=>{
    const password="abcd"
    const temp=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,temp)

    console.log(temp)
    console.log(hashpassword)
    console.log(await bcrypt.compare("abcd",hashpassword))
    res.json({msg:"signup route"})
})


//login
userRouter.post("/login",async(req,res)=>{
    res.json({msg:"login route"})
})
module.exports=userRouter;