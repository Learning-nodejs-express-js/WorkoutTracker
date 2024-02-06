require("dotenv").config()
const mongoose=require("mongoose")
const express=require("express")
const app=express()
const workoutRoutes=require("./Routes/workoutRoutes")


app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is working",process.env.PORT)
    })
}).catch((err)=>{
console.log("error")
})


app.use("/workouts",workoutRoutes)


