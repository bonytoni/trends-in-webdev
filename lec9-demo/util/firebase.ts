import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhwKRdxm4wedHJjtwcYJcQTfobCwC53wQ",
  authDomain: "trends-lecture-9.firebaseapp.com",
  projectId: "trends-lecture-9",
  storageBucket: "trends-lecture-9.appspot.com",
  messagingSenderId: "984299628566",
  appId: "1:984299628566:web:93717afee66cbd5558ad37"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
