import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { onSnapshot, query, collection, addDoc, serverTimestamp, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import './App.css';


function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(15));
    const unsubscribe = onSnapshot(q, snapshot => {
      let messages = snapshot.docs.map(doc => doc.data());
      setMessages(messages.reverse()); // Reverse the array to display the newest messages at the bottom
    });
  
    return unsubscribe;
  }, []);
  

  const auth = getAuth();
  const sendMessage = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL, displayName } = auth.currentUser;

    if (formValue) {
      await addDoc(collection(db, 'messages'), {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
        displayName // Adding the displayName
      });

      setFormValue('');
    }
  }

  return (
    <div className='cr'>
      <div className='msg'>
        {messages && messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
      </div>

      <form className='typebox' onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something..."
          className='typehere'
        />

        <button className='sendbtn' type="submit" disabled={!formValue}>📨</button>
      </form>
      <br></br>

    </div>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message; // Getting the displayName

  return <p>{displayName}: {text}</p> // Displaying the displayName along with the message
}

export default ChatRoom;

