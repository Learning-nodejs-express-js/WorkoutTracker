const express=require("express")


const router=express.Router()

router.get("/",(req,res)=>{
    res.json({msg:"get all workouts"})
})

router.post("/",(req,res)=>{
    res.json({msg:"post workouts"})
})
router.get("/:id",(req,res)=>{
    res.json({msg:"get one workout"})
})
router.delete("/:id",(req,res)=>{
    res.json({msg:"delete one workout"})
})
router.patch("/:id",(req,res)=>{
    res.json({msg:"patch a workout"})
})

module.exports=router;