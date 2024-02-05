const express=require("express")

const router=express.Router()

router.get("/",(req,res)=>{
    res.json({msg:"sending all the workouts"})
})

router.get("/:id",(req,res)=>{
    res.json({msg:"get request for "+req.params.id})
})

router.post("/",(req,res)=>{
    res.json({msg:"posting workouts"})
console.log(req.body)
})

router.delete("/:id",(req,res)=>{
    res.json({msg:"deleting id"+req.params.id})
})

router.patch("/:id",(req,res)=>{
    res.json({msg:"patching id"+req.params.id})
})

module.exports=router;