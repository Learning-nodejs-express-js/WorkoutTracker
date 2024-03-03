
import './App.css'
import { Navbar } from './Components/Navbar'
import { ListWorkouts } from './Components/ListWorkouts'
import {AddWorkout} from './Components/AddWorkout'
import { Home } from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import { Login } from './Components/Authentication/Login'
import { SignUp } from './Components/Authentication/SignUp'
function App() {
  

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      
      
     
    </div>
  )
}

export default App
