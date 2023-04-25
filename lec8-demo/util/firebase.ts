import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA2s3MrZh-UEtwULNrHZaynSWtDeUfrTV0",
  authDomain: "trends-lecture-8-7a13e.firebaseapp.com",
  projectId: "trends-lecture-8-7a13e",
  storageBucket: "trends-lecture-8-7a13e.appspot.com",
  messagingSenderId: "597771906792",
  appId: "1:597771906792:web:380095c364bbd3f661635d"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
