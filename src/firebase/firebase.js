import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVmb_3EWeGuSFKXDFv_F_E5oJIpQH9Ay4",
  authDomain: "gymbuddies-20bbf.firebaseapp.com",
  projectId: "gymbuddies-20bbf",
  storageBucket: "gymbuddies-20bbf.firebasestorage.app",
  messagingSenderId: "147657320352",
  appId: "1:147657320352:web:1f529b8949298c72ea26c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);