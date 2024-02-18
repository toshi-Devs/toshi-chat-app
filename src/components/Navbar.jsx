import { signOut } from '@firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext';

function Navbar() {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className='Navbar'>
        <span className='logo'> Toshi Chat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="avatar" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar