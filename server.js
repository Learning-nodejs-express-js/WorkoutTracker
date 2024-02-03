require("dotenv").config()
const express=require("express")

const app=express()

app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})
app.get("/",(req,resp)=>{
    resp.json({helloworld:"1st hello worled get requestasdf"})
})
app.listen(process.env.PORT,()=>{
    console.log("hello world server running on port ",process.env.PORT)
})