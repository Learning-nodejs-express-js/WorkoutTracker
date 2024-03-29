import React, { useContext, useState } from 'react';
import './AddWorkout.css';
import {workoutContext} from '../state/WorkoutState'
import { useAuthContext } from '../hooks/useAuthContext';

export const AddWorkout = () => {
  const [title,setTitle]=useState("");
  const [reps,setReps]=useState("");
  const [weight,setWeight]=useState("");
  const [workouts,dispatch]=useContext(workoutContext);
  const {state}=useAuthContext()
  const addworkout=async()=>{
 const response=await fetch("/workouts",{
  method:"POST",
  headers: {
    "authorization":`Bearer ${state.user.token}`,
    "Content-Type": "application/json",
  },
  body:JSON.stringify({  
    "title":title,
    "reps":reps,
    "weight":weight,
  }),

 })
 if(response.ok){
  const data=await response.json();
  dispatch({type:"ADD_WORKOUT",payload:data.obj})
 }
}

  return (
    <div className="add-workout-form">
      
        <div className="form-group">
          <label htmlFor="workout">Workout</label>
          <input type="text" id="workout" className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input type="number" id="reps" className="form-control" onChange={(e)=>{setReps(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="push-ups">weight</label>
          <input type="number" id="push-ups" className="form-control" onChange={(e)=>{setWeight(e.target.value)}}/>
        </div>
        <button className="btn btn-primary" onClick={addworkout}>
          Submit
        </button>
     
    </div>
  );
};
