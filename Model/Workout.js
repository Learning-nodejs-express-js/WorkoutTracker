const mongoose=require("mongoose")
const workoutSchema=new mongoose.Schema({workout:String,reps:Number,rest:Number})
const Workout=mongoose.model("Workout",workoutSchema)
module.exports=Workout