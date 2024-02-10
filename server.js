require("dotenv").config()
const express=require("express")
const app=express()
const workoutRouter=require("./Routes/workoutRoutes")
const mongoose=require("mongoose")
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(express.json())
app.use("/workouts",workoutRouter)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port ",process.env.PORT)
    })
}).catch((Err)=>{
    console.log(Err)
})
