import React from 'react'
import addImg from '../img/add-img.png'

function Register() {
  return (
    <div className='formContainer'>
      <div className="formWrapper">

        <span className='logo'>Toshi Chat</span>
        <span className='title'>Register</span>

        <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input style={{display:"none"}} type="file" placeholder="Profile Picture" id='file' />
        <label for='file'>
          <img src={addImg} alt="addImg" />
          <span>Add Profile Picture</span>
        </label>
        <button type="submit">Register</button>
      </form>
       <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register