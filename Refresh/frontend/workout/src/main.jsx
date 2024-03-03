import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {WorkoutContextProvider} from './state/WorkoutState.jsx'
import {AuthContextProvider} from './state/AuthState.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
    <AuthContextProvider>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
