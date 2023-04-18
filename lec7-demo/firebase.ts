import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";

let serviceAccount = require("./service_account.json")

const app = initializeApp({credential: cert(serviceAccount)})
const db = getFirestore()

export { db }