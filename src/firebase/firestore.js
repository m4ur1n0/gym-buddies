// src/firebase/firestore.js
import { db } from "./firebase";
import { collection, addDoc, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";


/**
 * Add a friend to the user's friends list.
 * @param {string} currentUid - The UID of the current user.
 * @param {string} friendUid - The UID of the friend to add.
 * @returns {string} - A success message or an error message.
 */

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

export const fetchFriends = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const friends = userData.friends || [];

      const friendsData = await Promise.all(
        friends.map(async (friendUid) => {
          const friendDoc = await getDoc(doc(db, "users", friendUid));
          if (friendDoc.exists()) {
            return { uid: friendUid, ...friendDoc.data() };
          } else {
            console.warn(`Friend with UID ${friendUid} not found`);
            return null;
          }
        })
      );

      return friendsData.filter(Boolean);
    }

    return [];
  } catch (err) {
    console.error("Could not fetch friends:", err.message);
    return [];
  }
};

export const sendNotification = async (friendUid, message) => {
  try {
    await updateDoc(doc(db, "users", friendUid), {
      notifications: arrayUnion(message),
    });
    console.log("Notification sent to:", friendUid);
  } catch (err) {
    console.error("Could not send notification:", err);
  }
};

export const addFriend = async (currentUid, friendUid) => {
  try {
    const friendDocRef = doc(db, "users", friendUid);
    const friendDoc = await getDoc(friendDocRef);

    if (!friendDoc.exists()) {
      throw new Error("Friend not found!");
    }

    const friendData = friendDoc.data();

    const currentUserRef = doc(db, "users", currentUid);
    await updateDoc(currentUserRef, {
      friends: arrayUnion(friendUid),
    });

    return `Friend ${friendData.name} added successfully!`;
  } catch (err) {
    console.error("Could not add friend:", err.message);
    throw err;
  }
};