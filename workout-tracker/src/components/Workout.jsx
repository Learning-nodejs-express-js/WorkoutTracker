import React from 'react'
import styles from './Workout.module.css'
export const Workout = ({workout}) => {
  return (
    <div className={styles.container}>
        <div>workout: {workout.title}</div>
        <div>reps :{workout.reps}</div>
        <div>weight: {workout.weight}</div>
    </div>
  )
}
