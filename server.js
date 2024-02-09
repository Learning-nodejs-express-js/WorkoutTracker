require("dotenv").config()
const express=require("express")
const app=express()
const workoutRouter=require("./Routes/workoutRoutes")



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(express.json())
app.use("/workouts",workoutRouter)

app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT)
})