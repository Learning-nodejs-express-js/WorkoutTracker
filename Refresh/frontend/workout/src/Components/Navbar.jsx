import React,{useContext} from 'react'
import './Navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
import {useNavigate} from 'react-router-dom'
import {workoutContext} from '../state/WorkoutState'
export const Navbar = () => {
  const {state,dispatch:authdispatch}=useAuthContext()
  const [workouts,dispatch]=useContext(workoutContext);
  const navigate=useNavigate()
  const logouthandler= ()=>{
    localStorage.removeItem("user");
    authdispatch({type:"LOGOUT"})
    navigate("/login")
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='workoutbar'>
      <div >Workout</div>
      <div className='buttons'>
        <div className='username'>
          {state.user ? `${state.user.email}` :<div className='temp'><div className='signup' onClick={()=>{navigate("/login")}}>Log in</div> <div className='signup' onClick={()=>{navigate("/signup")}}>signup</div></div>}
        </div>
        {state.user ? <div className='logout-button' onClick={()=>{logouthandler()}}>
          logout
        </div> : <></>}
        
      </div>
      
    </div>
  )
}
