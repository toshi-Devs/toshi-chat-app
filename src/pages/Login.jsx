import { signInWithEmailAndPassword } from '@firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate, NavLink } from 'react-router-dom';

import { Toaster, toast } from 'react-hot-toast'




function Login() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      navigate('/')
    }
    catch (error) {
      toast.error("Something went wrong || " + error.message)
    }
  }

  
  return (
    <div className='formContainer'>
      <Toaster />
      <div className="formWrapper">

        <span className='logo'>Toshi Chat</span>
        <span className='title'>Login</span>

        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input style={{display:"none"}} type="file" placeholder="Profile Picture" id='file' />
        <button type="submit">Sign In</button>
      </form>
       <p>You don't have an account? <NavLink to='/register' >Register </NavLink></p>
      </div>
    </div>
  )
}

export default Login;