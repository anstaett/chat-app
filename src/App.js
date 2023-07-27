import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import './App.css';


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1 className='title'>AnChat Secret Chat Room 🤫</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className='signout' onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default App;
