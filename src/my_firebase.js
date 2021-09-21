// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0qR5f2E4KC6FZ4EViqdT-q6AoBrADlik",
  authDomain: "nqrt-9c93e.firebaseapp.com",
  projectId: "nqrt-9c93e",
  storageBucket: "nqrt-9c93e.appspot.com",
  messagingSenderId: "432892471635",
  appId: "1:432892471635:web:af08d22e46bed0ee8719a6",
  measurementId: "G-9LBXZZ9NK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app)
const myCollection = collection(firestore, 'claps')

async function testFB(myCollection) {
  const myDoc = await doc(myCollection, 'matching')
  const data  = await getDoc(myDoc)
  console.log('TEST Firebase', data.data())
  return myDoc
}

//const myDoc = testFB(myCollection)
//console.log('TEST myDOC Firebase', myDoc)

export default myCollection