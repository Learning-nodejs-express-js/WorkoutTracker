
import './App.css'
import { Navbar } from './Components/Navbar'
import { ListWorkouts } from './Components/ListWorkouts'
import {AddWorkout} from './Components/AddWorkout'
import { Home } from './Components/Home'
import {Routes,Route,Navigate} from 'react-router-dom'
import { Login } from './Components/Authentication/Login'
import { SignUp } from './Components/Authentication/SignUp'
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const {state}=useAuthContext()

  return (
    <div>
        <Routes>
          
          <Route exact path="/" element={state.user ? <Home></Home> : <Navigate to="/login"></Navigate>}></Route>
          <Route exact path="/login" element={!state.user ? <Login></Login> : <Navigate to="/"></Navigate>}></Route>
          <Route exact path="/signup" element={!state.user ? <SignUp></SignUp> : <Navigate to="/"></Navigate>}></Route>
        </Routes>
      
      
     
    </div>
  )
}

export default App
