import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/ui/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/ui/footer/Footer';
import Admin from './pages/Admin/Admin';
import Login from './pages/LoginAdmin'
import ToastProvider from './components/ui/Toast/ToastProvider';
import RequireAuth from './components/Admin/RequireAuth/RequireAuth';

function App() {
  const { pathname } = useLocation();
  const hideFrame =
    pathname.startsWith('/admin') || pathname.startsWith('/login');

  return (
    <React.Fragment>
      {!hideFrame && <Navbar />}
      <ToastProvider />
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
      {!hideFrame && <Footer />}
    </React.Fragment>
  )
}

export default App
