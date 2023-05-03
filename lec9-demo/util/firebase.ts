import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhwKRdxm4wedHJjtwcYJcQTfobCwC53wQ",
  authDomain: "trends-lecture-9.firebaseapp.com",
  projectId: "trends-lecture-9",
  storageBucket: "trends-lecture-9.appspot.com",
  messagingSenderId: "984299628566",
  appId: "1:984299628566:web:93717afee66cbd5558ad37",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

const providers = { googleProvider: new GoogleAuthProvider() }

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}
