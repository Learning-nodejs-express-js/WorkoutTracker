import React, { useContext, useState } from 'react'

import styles from './Right.module.css'
import {WorkoutContext} from '../workoutstate/WorkoutContextProvider'
export const Right = () => {
  const [title,setTitle]=useState("")
  const [reps,setReps]=useState("")
  const [weight,setWeight]=useState("")
  const {dispatch}=useContext(WorkoutContext)
  const addWorkout=async()=>{
    const response=await fetch("/workouts",{
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title:title,reps:reps,weight:weight}), 
    })
    const workouts = await response.json();
    if(response.ok){
      dispatch({type:"POST_WORKOUT",payload:workouts})
    }

    
  }
  return (
    <div className={styles.container}>
        <div className={styles.div1}>
            <label>Title</label>
            <input type='text' name="title" onChange={(e)=>{setTitle(e.target.value)}} value={title}></input>
        </div>
        <div className={styles.div2}>
            <label>Reps</label>
            <input type='text' name="reps" onChange={(e)=>{setReps(e.target.value)}} value={reps}></input>
        </div>
        <div className={styles.div3}>
            <label>Weight</label>
            <input type='text' name="weight" onChange={(e)=>{setWeight(e.target.value)}} value={weight}></input>
        </div>
        <button onClick={()=>{addWorkout()}}>Add workout</button>
    </div>
  )
}
