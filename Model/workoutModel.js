const mongoose=require("mongoose")

const workoutSchema=new mongoose.Schema({
    title:{
        type:"String",
        required:"true"
    },
    reps:{
        type:"Number",
        required:"true"
    },
    weight:{
        type:"Number",
        required:"true"
    }
})

module.exports=mongoose.model("workoutModel",workoutSchema)