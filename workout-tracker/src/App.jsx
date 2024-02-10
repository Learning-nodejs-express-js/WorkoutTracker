import { useContext, useEffect, useState } from 'react'
import styles from './App.module.css'
import { Header} from './components/Header'
import {Left} from './components/Left'
import { Right } from './components/Right'
import {WorkoutContext} from './workoutstate/WorkoutContextProvider'
function App() {
  const {state,dispatch}=useContext(WorkoutContext);
  
  const fetchworkouts=async()=>{
    const response=await fetch("/workouts")
    const workouts = await response.json();
    dispatch({type:"SET_WORKOUTS",payload:workouts})
  }
  useEffect(()=>{
      fetchworkouts()
  },[])

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.minicontainer}>
          <Left workouts={state}></Left>
          <Right></Right>
      </div>
      
    </div>
  )
}

export default App
