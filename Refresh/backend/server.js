const express=require("express")
const app=express()
const mongoose=require("mongoose")
var cors = require('cors')
require("dotenv").config()
const workoutRouter=require("./Router/WorkoutRouter")
const userRouter=require("./Router/UserRouter")
app.use(express.json())
app.use(cors())



app.use("/user",userRouter)
app.use("/workouts",workoutRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("hello world")
    })
    
})

