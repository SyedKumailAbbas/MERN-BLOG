import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Project from './pages/Project'
import Header from './Components/Header'
import About from './Pages/About'
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Dashboard' element={<Dashboard />}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Projects' element={<Project/>}/>
    <Route path='/About' element={<About/>}/>
    </Routes>
   </Router>
  )
}

export default App
