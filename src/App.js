import React from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from './components/firebase';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/Home';

function App() {
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result.user) {
          // User successfully signed in
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
        }
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
        });
      }
    };
    handleRedirectResult();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
