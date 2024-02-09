const express=require("express")
const workoutmodel=require("../Model/workoutModel")

//get all controller
const workoutGetController=async(req,res)=>{
    try{
        const allworkouts=await workoutmodel.find({})
        res.status(200).json(allworkouts)
    }
    catch(err){
        res.status(400).json({msg:"could not find data"})
    }
    
}

//get by id controller
const workoutGetByIdController=async(req,res)=>{
    try{
        const workoutwithid=await workoutmodel.find({_id:req.params.id})
        res.status(200).json(workoutwithid)
    }
    catch{
        res.status(400).json({msg:"could not find workout with id "+req.params.id})
    }
    
}

//post controller
const workoutPostController=async(req,res)=>{
    try{
        const workoutadd=await workoutmodel.create(req.body)
        res.status(200).json({msg:"data has been added ",dataadded:workoutadd})
    }
    catch(err){
        console.log(err)
        res.status(400).json({msg:"could not add the data"})
    }
}

//delete id controller

const workoutDeleteController=async(req,res)=>{
    try{
        const workoutdelete=await workoutmodel.deleteOne({_id:req.params.id})
        if(workoutdelete.deletedCount>=1){
            res.status(200).json("workout deleted with id "+req.params.id)
        }
        else{
            res.status(400).json("could not delete please provide correct id")
        }
    }
    catch(err){
        res.status(400).json({msg:"could not delete the data"})
    }
}

//patch id controller
const workoutPatchController=async(req,res)=>{
    try{
        const workoutpatch=await workoutmodel.findOneAndUpdate({_id:req.params.id},req.body)
        const workoutwithid=await workoutmodel.find({_id:req.params.id})
        res.status(200).json({msg:"updated the data ",updatedworkout:workoutwithid})
    }
    catch(err){
        res.status(400).json({msg:"could not update the data"})
    }
    
}

module.exports={workoutGetController,workoutGetByIdController,workoutPostController,workoutDeleteController,workoutPatchController}