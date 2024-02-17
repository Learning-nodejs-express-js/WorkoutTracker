const express=require("express")

const workoutRouter=express.Router()
const {workoutGetAll,workoutGetById,workoutPost,workoutDelete,workoutPatch}=require("../Controller/WorkoutController")

workoutRouter.get("/",workoutGetAll)

workoutRouter.get("/:id",workoutGetById)


workoutRouter.post("/",workoutPost)

workoutRouter.delete("/:id",workoutDelete)

workoutRouter.patch("/:id",workoutPatch)

module.exports=workoutRouter