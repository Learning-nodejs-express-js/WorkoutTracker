import React, { useContext } from 'react';
import './WorkoutCard.css'; // Import the CSS file for styling
import {workoutContext} from '../state/WorkoutState'
export const WorkoutCard = ({ workout }) => {
  const [state,dispatch]=useContext(workoutContext)
  const deleteworkout=async()=>{
    const response=await fetch("http://localhost:4000/workouts/"+workout._id,{
      method:"DELETE"
    })
    if(response.ok){
      const resjson=await response.json()
      dispatch({type:"DELETE_WORKOUT",payload:resjson._id})
    }
  }
  return (
    <div className="workout-card"> {/* Adding class name for styling */}
    <div className='minicontainer1'>
       <div className="workout-title">Workout: {workout.title}</div> {/* Adding class name for styling */}
      <span className="material-symbols-outlined" onClick={deleteworkout}>delete_forever</span>
    </div>
      
      <div className="workout-reps">reps:  {workout.reps}</div> {/* Adding class name for styling */}
      <div className="workout-weight">push ups:  {workout.weight}</div> {/* Adding class name for styling */}

      
    </div>
  );
};
