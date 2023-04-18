/* import firebase firestore db */
import { db } from "./firebase"

/* access collection reference */
const peopleCollectionRef = db.collection("people")
const tonyDocRef = peopleCollectionRef.doc("tc448")

/* Create */
const createDoc = async (netid: string) => {
  /* insert code here */
  // await tonyDocRef.set({hometown: "nyc"})
  const doc = peopleCollectionRef.doc(netid)
  await doc.set({hometown: "nyc", last: "chen", hobby: "music"})
};

createDoc("tc448");
createDoc("my07");

/* Read */
const getAllPeople = async () => {
  /* insert code here */
  const snapshot = await peopleCollectionRef.get()
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data())
  })
};

getAllPeople();

const getPerson = async (netid: string) => {
  /* insert code here */
};

getPerson("myl39");

const queryAge = async (age: number) => {};

queryAge(20);

/* Update */
const updateDoc = async (netid: string) => {
  /* insert code here */
};

updateDoc("myl39");

/* Delete */
const deleteDoc = async (netid: string) => {
  /* insert code here */
};

deleteDoc("myl39");
