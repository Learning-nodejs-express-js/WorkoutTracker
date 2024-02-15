const express=require("express")

const workoutRouter=express.Router()

workoutRouter.get("/",(req,res)=>{
    res.json({msg:"workout router is working"})
})

workoutRouter.get("/:id",(req,res)=>{
    res.json({msg:"workout with id is"+req.params})
})


workoutRouter.post("/",(req,res)=>{
    res.json({msg:"workout that server received ",...req.body})
})

workoutRouter.delete("/:id",(req,res)=>{
    res.json({msg:"object to be delete "+req.params.id})
})

workoutRouter.patch("/:id",(req,res)=>{
    res.json({msg:"object to patch is "+req.params.id})
})

module.exports=workoutRouter