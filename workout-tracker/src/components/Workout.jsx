import React, { useContext } from 'react'
import styles from './Workout.module.css'
import {WorkoutContext} from '../workoutstate/WorkoutContextProvider'
export const Workout = ({workout}) => {
  const {dispatch}=useContext(WorkoutContext)
  const deleteworkout=async(id)=>{
    try{
      const response=await fetch("http://localhost:4000/workouts/"+id,{method:"DELETE"})
      
      if(response.ok){
        dispatch({type:"DELETE_WORKOUT",payload:id})
      }
      
    }catch(Err){
      console.log("could not delete data")
    }
    
  }
  return (
    <div className={styles.container}>
      <div>
        <div>workout: {workout.title}</div>
          <div>reps :{workout.reps}</div>
          <div>weight: {workout.weight}</div>
      </div>
        
        <span className="material-symbols-outlined" id={styles.deletebutton} onClick={()=>{deleteworkout(workout._id)}}>delete_forever</span>
    </div>
  )
}
