const jwt=require("jsonwebtoken")
require("dotenv").config()
const userModel=require("../Model/UserModel")
const protectRoute=async(req,res,next)=>{

    const {authorization}=req.headers;
    if(!authorization){
        res.status(400).json({error:"authorization token required"})
        return;
    }
    const Bearer=authorization.split(" ")[0]
    const token=authorization.split(" ")[1]
    console.log(Bearer)
    console.log(token)
    try{
        const {_id}=jwt.verify(token,process.env.JWT_KEY)
        console.log(_id)
        const temp=await userModel.findOne({_id:_id})
        if(temp){
            console.log(temp)
            req.user=temp;
            next()
        }
        else{
            res.status(400).json({error:"user not found"})
        }
        
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    
    
}
module.exports={protectRoute}