const express=require("express")
const app=express()
const mongoose=require("mongoose")
require("dotenv").config()
const workoutRouter=require("./Router/WorkoutRouter")

app.use(express.json())


app.use("/workouts",workoutRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("hello world")
    })
    
})

