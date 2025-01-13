// src/firebase/firestore.js
import { db } from "./firebase";
import { collection, addDoc, getDocs, doc, getDoc, setDoc } from "firebase/firestore";

//adddoc
export const addDocument = async (colName, data) => {
  try {
    const docRef = await addDoc(collection(db, colName), data);
    console.log("doc added with id:", docRef.id);
    return docRef.id;
  } catch (err) {
    console.error("Could not add doc:", err);
  }
};

//setdoc
export const setDocument = async (colName, docId, data) => {
    try {
      const docRef = doc(db, colName, docId);
      await setDoc(docRef, data);
      console.log("Document set with ID:", docId);
    } catch (err) {
      console.error("Could not set document:", err);
    }
  };

//fetch
export const fetchCol = async (colName) => {
  try {
    const qSnap = await getDocs(collection(db, colName));
    const data = [];
    qSnap.forEach((docSnap) => {
        const docData = docSnap.data();
        const docId = docSnap.id;
        data.push({ id: docId, ...docData });
      });
    return data;
  } catch (err) {
    console.error("Could not fetch collection:", err);
  }
};

//fetch by id
export const fetchDoc = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
  } catch (err) {
    console.error("could not fetch doc:", err);
  }
};
