import React from 'react'
import styles from './Left.module.css'
import {Workout} from './Workout'
export const Left = ({workouts}) => {
  return (
    <div className={styles.container}>
      {workouts && workouts.map((workout)=>{
      return <Workout key={workout._id} workout={workout}></Workout>
    })}    
    </div>
  )
}
