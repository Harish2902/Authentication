import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTpZ4GCuIEd4Y25ojxPrUCb70eBFR7UHM",
  authDomain: "login-38ba3.firebaseapp.com",
  projectId: "login-38ba3",
  storageBucket: "login-38ba3.appspot.com",
  messagingSenderId: "324687863447",
  appId: "1:324687863447:web:761c91dd3bf2c0774993d2",
  measurementId: "G-2XE8WF2KR0"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
