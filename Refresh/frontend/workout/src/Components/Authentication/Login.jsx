import React from 'react'
import { Navbar } from '../Navbar'
import { useState } from 'react'
import {useAuthContext} from '../../hooks/useAuthContext'
export const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {state,dispatch}=useAuthContext()
    const eventHandler=async(e)=>{
        e.preventDefault()
    
        const response=await fetch("/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "email":email,
                "password":password
            })
        }
        )
        const user=await response.json();


        dispatch({type:"ADD_USER",payload:user})

       
    }

  return (
    <div>
        <Navbar></Navbar>
        <h2>Login Form</h2>
        <form >
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
            <input type="submit" value="Login" onClick={(e)=>{eventHandler(e)}}/>
        </form>
    </div>
  )
}
