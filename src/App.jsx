import React, { useContext } from 'react';
import Register from './pages/Register';
import './style.scss'
import Login from './pages/Login';
import Home from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  // console.log(currentUser);

  const ProtectedRoute = ( {children}) => {
    if(currentUser){
      return children
    }
    else{
      return <Login />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
