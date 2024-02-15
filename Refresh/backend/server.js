const express=require("express")
const app=express()


const workoutRouter=require("./Router/WorkoutRouter")

app.use(express.json())

app.use("/workouts",workoutRouter)

app.listen(4000,()=>{
    console.log("hello world")
})