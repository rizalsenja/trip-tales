import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Admin from './pages/Admin/Admin';
import Login from './pages/LoginAdmin'
import ToastProvider from './components/ui/Toast/ToastProvider';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  const { pathname } = useLocation();
  const hideFrame =
    pathname.startsWith('/admin') || pathname.startsWith('/login');

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <ToastProvider />
      {!hideFrame && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
            path='/admin'
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
      </Routes>
      {/* <Footer /> */}
      {!hideFrame && <Footer />}
    </React.Fragment>
  )
}

export default App
