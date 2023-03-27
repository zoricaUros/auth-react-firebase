/** @format */

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "./naslovna.css";

export default function Naslovna() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='App'>
      <div>
        <h3 className='register--text'>Register User</h3>
        <input
          placeholder='Email'
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder='Password'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button className='btn--create--user' onClick={register}>
          Create User
        </button>
      </div>
      <div>
        <h3 className='login--text'>Login</h3>
        <input
          placeholder='Email'
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder='Password'
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button className='btn--create--user' onClick={login}>
          Login
        </button>
      </div>
      <h4 className='user--loggedin'>User Logged In:</h4>
      {user?.email}
      <button className='btn--signout' onClick={logout}>
        Sign Out
      </button>
    </div>
  );
}
