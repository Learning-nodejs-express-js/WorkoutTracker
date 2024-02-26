const mongoose=require("mongoose")
const validtor=require("validator")
const bcrypt=require("bcrypt")

const userSchema=mongoose.Schema({email:{
 type:"String",
 required:true,
 unique:true   
},password:{
    type:"String",
    required:true,
}},{timestamp:true})


//signup custom function
userSchema.statics.signup=async function({email,password}){
if(!email || !password){
    throw Error("email and password fields should not be empty")
}
if(!validtor.isEmail(email)){
    throw Error("please enter a valid email")
}
if(!validtor.isStrongPassword(password)){
    throw Error("please enter a strong password")
}
const user=await this.findOne({email})

if(!user){
const salt=await bcrypt.genSalt(10)
const hashpassword=await bcrypt.hash(password,salt)
const user=await this.create({email:email,password:hashpassword})
return user;
}
else{
    throw Error("email already in use")
}
} 

//login custom function
userSchema.statics.login=async function({email,password}){
if(!email || !password){
    throw Error("please enter a valid password")
}
if(!validtor.isEmail(email))
{
    throw Error("please enter a valid email")
}
const user=await this.findOne({email})

if(user){
    const passwordaresame=await bcrypt.compare(password,user.password)
    if(passwordaresame){
        return user;
    }
    else{
        throw Error("password is incorrect")
    }
}
else{
    throw Error("email does not exist")
}
}



module.exports=mongoose.model("userModel",userSchema)