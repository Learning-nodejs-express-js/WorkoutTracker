require("dotenv").config()
const express=require("express")
const app=express()
const mongoose=require("mongoose")

const workoutRouter=require("./routes/workout")

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use("/workouts",workoutRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running and conencted to mongoose database")
    })
}).catch((err)=>{
    console.log(err)
})

