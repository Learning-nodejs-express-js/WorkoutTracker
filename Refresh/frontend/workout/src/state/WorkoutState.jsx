import {  createContext, useReducer } from "react";


export const workoutreducer=(state,action)=>{
    switch(action.type){
        case "GET_WORKOUTS":
            return action.payload;
        case "ADD_WORKOUT":
            return [...state,action.payload]
        case "DELETE_WORKOUT":
            return [...state].filter(workout=>workout._id!==action.payload)
        default:
            return state;
    }
}

export const workoutContext=createContext()


export const WorkoutContextProvider=({children})=>{
    const [workouts,dispatch]=useReducer(workoutreducer,[])
    return (<workoutContext.Provider value={[workouts,dispatch]}>
        {children}
    </workoutContext.Provider>)
}