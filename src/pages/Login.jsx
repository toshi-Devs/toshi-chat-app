import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
      <div className="formWrapper">

        <span className='logo'>Toshi Chat</span>
        <span className='title'>Login</span>

        <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input style={{display:"none"}} type="file" placeholder="Profile Picture" id='file' />
        <button type="submit">Sign In</button>
      </form>
       <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login;