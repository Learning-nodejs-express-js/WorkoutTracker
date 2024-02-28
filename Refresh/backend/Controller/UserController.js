const jwt=require("jsonwebtoken")
const userModel=require("../Model/UserModel")
require("dotenv").config()
const createToken=(_id)=>{
    return jwt.sign({_id:_id,},process.env.JWT_KEY,{expiresIn:"3d"})
}
//signup
const signupController=async(req,res)=>{
    try{
        const user=await userModel.signup(req.body);
        const token=createToken(user._id);
        res.status(200).json({email:user.email,token:token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}



//login
const loginController=async(req,res)=>{
    try{
        const user=await userModel.login(req.body);
        const token=createToken(user._id);
        res.status(200).json({email:user.email,token:token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={signupController,loginController}
