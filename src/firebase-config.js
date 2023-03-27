/** @format */

import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB9s7debBaZkbxl1DJUzG4hziWwE3DPQsM",

  authDomain: "auth-react-caf41.firebaseapp.com",

  projectId: "auth-react-caf41",

  storageBucket: "auth-react-caf41.appspot.com",

  messagingSenderId: "356387619125",

  appId: "1:356387619125:web:5c1e21281fcdd4299f8c7c",

  measurementId: "G-6RB9B1R3X7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
