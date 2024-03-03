import React, { useContext, useEffect, useState } from 'react'
import './ListWorkouts.css'
import { WorkoutCard } from './WorkoutCard'
import {useAuthContext} from '../hooks/useAuthContext'
import {workoutContext} from '../state/WorkoutState'
export const ListWorkouts = () => {
    const [workouts,dispatch]=useContext(workoutContext)
    const {state}=useAuthContext()
    const fetchworkouts=async()=>{
        const respose=await fetch("/workouts/",{headers:{
          "authorization":`Bearer ${state.user.token}`
        }});
        const resjson=await respose.json()
        dispatch({type:"GET_WORKOUTS",payload:resjson})
     
    }

    useEffect(()=>{
    fetchworkouts()
    },[])
    
  return (
    <div className='container1'>
       {workouts && workouts.map((workout)=>{return <WorkoutCard key={workout._id} workout={workout}></WorkoutCard>})}
    </div>
  )
}
