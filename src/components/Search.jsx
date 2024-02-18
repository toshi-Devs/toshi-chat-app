import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    if (user) {
      const uid1 = currentUser.uid;
      const uid2 = user.uid;
      const combinedId = [uid1, uid2].sort().join("");
  
      const chatRef = doc(db, "chats", combinedId);
      
      try {
        const chatDoc = await getDocs(chatRef);
  
        if (!chatDoc.exists()) {
          // create chat
          await setDoc(chatRef, { messages: [] });
  
          // create message collection inside userChat collection
          const userChatRefCurrentUser = doc(db, `userChats/${currentUser.uid}/chats`, combinedId);
          await setDoc(userChatRefCurrentUser, { messages: [] });
  
          const userChatRefOtherUser = doc(db, `userChats/${user.uid}/chats`, combinedId);
          await setDoc(userChatRefOtherUser, { messages: [] });
  
          // create user chat
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + "userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId + "date"]: serverTimestamp()
          });
  
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId + "userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL
            },
            [combinedId + "date"]: serverTimestamp()
          });
        }
      } catch (error) {
        console.log("Error creating chat: ", error);
      }
  
      setUser(null);
      setUsername('');
    }
  }
  
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;