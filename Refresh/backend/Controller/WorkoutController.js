const express=require("express")

const workoutModel=require("../Model/WorkoutModel")

const workoutGetAll=async(req,res)=>{
    try{

        let obj=await workoutModel.find({userid:req.user._id})
        res.status(200).json(obj)
    }
   catch(error){
    res.status(400).json({msg:"workout could not be retrived due to database error"})
   }
    
    
}

const workoutGetById=async(req,res)=>{
    try{

        let obj=await workoutModel.findOne({_id:req.params.id,userid:req.user._id})
        res.status(200).json(obj)
    }
   catch(error){
    res.status(400).json({msg:"workout could not be retrived due to database error"})
   }
    
}


const workoutPost=async(req,res)=>{
    
    try{
        
        let obj=await workoutModel.create({...req.body,userid:req.user._id})
        console.log(obj)
        res.status(200).json({msg:"workout created ",obj})
    }
   catch(error){
    res.status(400).json({msg:"workout could not be created due to database error"})
   }
}

const workoutDelete=async(req,res)=>{
    
    try{
        let obj=await workoutModel.deleteOne({userid:req.user._id,_id:req.params.id})
        res.status(200).json({msg:"deleted",...obj,_id:req.params.id})
    }
   catch(error){
    res.status(400).json({msg:"workout could not be retrived due to database error"})
   }
}

const workoutPatch=async(req,res)=>{
    
    try{

        let obj=await workoutModel.updateOne({userid:req.user._id,_id:req.params.id}, req.body);
        res.status(200).json(obj)
    }
   catch(error){
    res.status(400).json({msg:"workout could not be retrived due to database error"})
   }
}

module.exports={workoutGetAll,workoutGetById,workoutPost,workoutDelete,workoutPatch}