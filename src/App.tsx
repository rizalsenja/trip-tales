import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import Navbar from './components/Navbar';
// import './App.css'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
