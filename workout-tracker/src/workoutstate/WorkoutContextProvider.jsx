import React, { createContext, useReducer } from 'react'
import { useContext } from 'react'


export const workoutReducer=(state,action)=>{
switch(action.type){
    case 'SET_WORKOUTS':
        return [...action.payload]
    case 'POST_WORKOUT':
        return [...state,action.payload] 
    case "DELETE_WORKOUT":
        return [...state].filter((workout)=>{return workout._id!==action.payload})
    default:
        return state;
}
}

export const WorkoutContext=createContext()

export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(workoutReducer,[])
  return (
    <WorkoutContext.Provider value={{state,dispatch}}>
        {children}
    </WorkoutContext.Provider>
  )
}
