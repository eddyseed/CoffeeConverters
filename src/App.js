import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Preloader from './Components/Preloader/Preloader'
export default function App() {
  return (
    <div>
      <Preloader />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  )
}
