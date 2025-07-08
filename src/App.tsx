import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Admin from './pages/Admin/Admin';
// import './App.css'

function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
      {!isAdmin && <Footer />}
    </React.Fragment>
  )
}

export default App
