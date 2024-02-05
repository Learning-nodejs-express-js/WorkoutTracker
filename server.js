require("dotenv").config()
const express=require("express")
const app=express()
const workoutRouter=require("./Routes/workout")
const mongoose=require("mongoose")
const Workout=require("./Model/Workout")

app.use(express.json())

app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})

app.use("/workouts",workoutRouter)

mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT,"listening on 4000")
    })
    Workout.insertMany({workout:"bench",reps:20,rest:1}).then(()=>{
        console.log("working data added")
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
console.log(err)
})



//testing
// app.get("/",(req,res)=>{
//     res.json({msg:"hello world from get"})
// })