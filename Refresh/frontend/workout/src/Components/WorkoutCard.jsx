import React, { useContext } from 'react';
import './WorkoutCard.css'; // Import the CSS file for styling
import {workoutContext} from '../state/WorkoutState'
import { useAuthContext } from '../hooks/useAuthContext';
export const WorkoutCard = ({ workout }) => {
  const [state,dispatch]=useContext(workoutContext)
  const {state:authstate}=useAuthContext();
  const deleteworkout=async()=>{
   
    const response=await fetch("/workouts/"+workout._id,{
      method:"DELETE",
      headers:{
        authorization:`Bearer ${authstate.user.token}`
      }
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
