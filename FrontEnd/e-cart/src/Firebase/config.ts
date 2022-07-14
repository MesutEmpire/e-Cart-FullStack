import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";
const firebaseConfig = {
    apiKey: "AIzaSyD9GB9Cj8nmpewlUiBPApMb5St0I9mTBLE",
    authDomain: "ecart-ac2ea.firebaseapp.com",
    projectId: "ecart-ac2ea",
    storageBucket: "ecart-ac2ea.appspot.com",
    messagingSenderId: "839058560231",
    appId: "1:839058560231:web:eed1cb7ac3654cb78cbe42",
    measurementId: "G-EQD5NHTZYG"
};

// init  firebase
initializeApp(firebaseConfig);

 //init firebase auth
const auth = getAuth()
const db = getFirestore()
const functions = getFunctions()

export { auth,db ,functions}