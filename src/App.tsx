import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Admin from './pages/Admin/Admin';
import Login from './pages/LoginAdmin'
// import './App.css'

function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const isLoginAdmin = pathname.startsWith('/login');

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {(!isAdmin && !isLoginAdmin) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
      {(!isAdmin && !isLoginAdmin) && <Footer />}
    </React.Fragment>
  )
}

export default App
