import React from 'react'
import addImg from '../img/add-img.png'

import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth' 
import { auth, db, storage } from '../firebase'
import { Toaster, toast } from 'react-hot-toast'


import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { NavLink, useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const storageRef = ref(storage, displayName + '/profilePicture');

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error("Something went wrong || " + error.message)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              displayName,
              email,
              photoURL: user.photoURL
            });
            navigate('/')

            await setDoc(doc(db, "userChats", user.uid), {});
          });

        }
      );
     
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
        <span className='title'>Register</span>

        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input style={{display:"none"}} type="file" placeholder="Profile Picture" id='file' />
        <label htmlFor='file'>
          <img src={addImg} alt="addImg" />
          <span>Add Profile Picture</span>
        </label>
        <button type="submit">Register</button>
      </form>
       <p>Already have an account? <NavLink to='/login' >Login </NavLink></p>
      </div>
    </div>
  )
}

export default Register