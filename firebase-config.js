"use client";
// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDNaF0e5apZdgsV7iTswDcHjnZHgS8xrn4",
    authDomain: "gvu-pastquestions.firebaseapp.com",
    projectId: "gvu-pastquestions",
    storageBucket: "gvu-pastquestions.appspot.com",
    messagingSenderId: "967091840239",
    appId: "1:967091840239:web:94fb5368986daa81d7e71a",
    measurementId: "G-KPHS0WFM98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



