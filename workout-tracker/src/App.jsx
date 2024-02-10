import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Header} from './components/Header'
import {Left} from './components/Left'
import { Right } from './components/Right'
function App() {
  const [workouts,setWorkOuts]=useState()
  const fetchworkouts=async()=>{
    const response=await fetch("http://localhost:4000/workouts")
    const workouts = await response.json();
    setWorkOuts(workouts)
  }
  useEffect(()=>{
      fetchworkouts()
  },[])
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.minicontainer}>
          <Left workouts={workouts}></Left>
          <Right></Right>
      </div>
      
    </div>
  )
}

export default App
