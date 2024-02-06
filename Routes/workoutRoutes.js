const express=require("express")

const router=express.Router()
const workoutModel=require("../Model/workoutModel")
router.get("/",(req,res)=>{
    res.json({msg:"hello world"})
})
router.get("/:id",(req,res)=>{
    res.json({msg:"get request for "+req.params})
})

router.post("/",(req,res)=>{
    workoutModel.create(req.body).then(()=>{
        console.log("data added")
        res.json(req.body)
    }).catch((err)=>{
        console.log(err)
    })
})

router.delete("/:id",(req,res)=>{
    console.log(req.params)
    res.json({msg:"delete for "+req.params.id})
})

router.patch("/:id",(req,res)=>{{
    res.json({msg:"patch for "+req.params})
}})

module.exports=router