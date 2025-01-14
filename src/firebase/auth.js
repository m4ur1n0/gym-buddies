// src/firebase/auth.js
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDocument } from "./firestore";

//signup
export const signUp = async (email, password, userData) => {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    console.log("User created with UID:", user.uid);
    await setDocument ("users", user.uid, {
        name: userData.name,
        email: email,
        bio: "",
        friends: [],
        notifications: ["let's work out!"],
        avatarLevel: 1,
        status: true,
        streak: 0,
        workouts: [],
        createdAt: new Date().toISOString(),
      });
    console.log("user signed up:", user);
  } catch (error) {
    console.error("Could not sign up:", error.message);
  }
};

//login
export const logIn = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCred.user);
  } catch (error) {
    console.error("Could not log in:", error.message);
  }
};
