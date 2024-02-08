const mongoose=require("mongoose")
const workoutSchema=mongoose.Schema({
    title:{type:String,required:true},
    reps:{type:Number,required:true},
    weight:{type:Number,required:true}
    },{timestamps:true})

const workoutModel=mongoose.model("workoutModel",workoutSchema)
module.exports=workoutModel