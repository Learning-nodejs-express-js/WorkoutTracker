require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const workoutRouter=require("./Routes/workoutRoutes")

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})
app.use(express.json())
app.use("/workouts",workoutRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running and conneted to db")
    })
}).catch((err)=>{
    console.log(err)
})

