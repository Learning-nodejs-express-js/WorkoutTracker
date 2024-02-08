const express=require("express")
const workoutRouter=express.Router()

const workoutModel=require("../Model/workoutModel")

//get
workoutRouter.get("/",async(req,res)=>{
    const data=await workoutModel.find()
    res.json(data)
    console.log(data)
    
})

//get by id
workoutRouter.get("/:id",(req,res)=>{
    res.json({msg:"requsted id is "+req.params.id})
})

//post
workoutRouter.post("/",async(req,res)=>{
    console.log(req.body)
    res.json(req.body)
    const data=await workoutModel.create(req.body)
    console.log(data+" added to server")
})

//delete by id
workoutRouter.delete("/:id",(req,res)=>{
    res.json({msg:"to delete id is "+req.params.id})
})

//patch by id
workoutRouter.patch("/:id",(req,res)=>{
    res.json({msg:"to patch id is "+req.params.id})
})



module.exports=workoutRouter