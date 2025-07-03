import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import './App.css'

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
