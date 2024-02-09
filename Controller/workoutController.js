const express=require("express")


//get all controller
const workoutGetController=async(req,res)=>{
    res.json({msg:"get request needs to send all the workouts"})
}

//get by id controller
const workoutGetByIdController=async(req,res)=>{
    res.json({msg:"get request needs to send the "+ req.params.id+" json object"})
}

//post controller
const workoutPostController=async(req,res)=>{
    res.json({msg:"need to add this data to database ",...req.body})
}

//delete id controller

const workoutDeleteController=async(req,res)=>{
    res.json({msg:"need to delete this data from database "+req.params.id})
}

//patch id controller
const workoutPatchController=async(req,res)=>{
    res.json({msg:"need to patch this data from database "+req.params.id})
}

module.exports={workoutGetController,workoutGetByIdController,workoutPostController,workoutDeleteController,workoutPatchController}