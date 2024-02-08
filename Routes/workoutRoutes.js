const express=require("express")

const workoutRouter=express.Router()

//get
workoutRouter.get("/",(req,res)=>{
    res.json("workout get request")
})
//get id
workoutRouter.get("/:id",(req,res)=>{
    res.json("workt requested for id"+req.params)
})

//post
workoutRouter.post("/",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

//delete
workoutRouter.delete("/:id",(req,res)=>{
    console.log("delete workout for id"+req.params)
    res.json(req.params)
})


//patch
workoutRouter.patch(":/id",(req,res)=>{
    console.log("patch workout for id",req.params)
    res.json(req.params)
})

module.exports=workoutRouter