import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { collection, doc, onSnapshot } from '@firebase/firestore';
import { db } from '../firebase';

function Chats() {

  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(chats);


  return (
    <div className='chats'>

      <div className="userChat">

        <img src="https://pbs.twimg.com/profile_images/1118525144568348672/LbeXK3_0_400x400.jpg" alt="user" />
        <div className='userChatInfo'>
          <span>Rain</span>
          <p>Hey, how are you?</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Chats