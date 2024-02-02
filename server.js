const express=require('express')

const app=express()

app.get("/",(req,res)=>{
    res.json({msg:'hello world first express js program'})
})

app.listen(8080,()=>{
    console.log("server is running on 8080")
})