import React from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import './App.css';


function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className='signin' onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

export default SignIn;
