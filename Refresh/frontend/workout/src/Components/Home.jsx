import React from 'react'
import styles from './Home.module.css'
import { ListWorkouts } from './ListWorkouts'
import { Navbar } from './Navbar'
import { AddWorkout } from './AddWorkout'
export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.center}>
            <ListWorkouts></ListWorkouts>
            <AddWorkout></AddWorkout>
      </div>
    </>
  )
}
