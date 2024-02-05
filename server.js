require("dotenv").config()

const express=require("express")
const router=require("./routes/workouts.js")
const app=express()
app.listen(process.env.PORT,()=>{
    console.log("server is running",process.env.PORT)
})

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use("/workouts",router)
