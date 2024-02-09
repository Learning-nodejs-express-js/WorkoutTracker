const express=require("express")
const workoutRouter=express.Router()
const {workoutGetController,workoutGetByIdController,workoutPostController,workoutDeleteController,workoutPatchController}=require("../Controller/workoutController")



//get all
workoutRouter.get("/",workoutGetController)
//get id
workoutRouter.get("/:id",workoutGetByIdController)
//post
workoutRouter.post("/",workoutPostController)
//delete id
workoutRouter.delete("/:id",workoutDeleteController)
//patch id
workoutRouter.patch("/:id",workoutPatchController)

module.exports=workoutRouter

