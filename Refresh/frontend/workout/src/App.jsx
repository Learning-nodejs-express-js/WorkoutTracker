
import './App.css'
import { Navbar } from './Components/Navbar'
import { ListWorkouts } from './Components/ListWorkouts'
import {AddWorkout} from './Components/AddWorkout'
function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <div className='center'>
      <ListWorkouts></ListWorkouts>
      <AddWorkout></AddWorkout>
      </div>
     
    </div>
  )
}

export default App
