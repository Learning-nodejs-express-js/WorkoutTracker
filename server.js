require("dotenv").config()
const express=require("express")
const app=express()
const workoutRouter=require("./Routes/workout")

app.use(express.json())

app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})

app.use("/workouts",workoutRouter)


app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT,"listening on 4000")
})

//testing
// app.get("/",(req,res)=>{
//     res.json({msg:"hello world from get"})
// })