const express=require("express")


const {signupController,loginController}=require("../Controller/UserController")

const userRouter=express.Router()

//signup
userRouter.post("/signup",signupController)

//login
userRouter.post("/login",loginController)
module.exports=userRouter;