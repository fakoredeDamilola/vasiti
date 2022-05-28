import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// console.log(process.)


// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyCTWka7BxJdZ_6kN7Eg4QO69OD8xKKGRWk",
    authDomain: "vasiti-61746.firebaseapp.com",
    projectId: "vasiti-61746",
    storageBucket: "vasiti-61746.appspot.com",
    messagingSenderId: "769312987471",
    appId: "1:769312987471:web:96d076d050ad1e197a0d3a"
  };


const app =firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

// const auth = getAuth(app);

export {  db };