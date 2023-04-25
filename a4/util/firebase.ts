import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDJo3rmh3Ol5ycFVrSc4XNcpCxX0qZkIts",
  authDomain: "trends-a4-370e4.firebaseapp.com",
  projectId: "trends-a4-370e4",
  storageBucket: "trends-a4-370e4.appspot.com",
  messagingSenderId: "205263115797",
  appId: "1:205263115797:web:0be82c89c28fbc81bce01c"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
