// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeodDSi8G5H7W2wtBiYAsMgoqRcGCTd1w",
  authDomain: "entregable-de264.firebaseapp.com",
  projectId: "entregable-de264",
  storageBucket: "entregable-de264.firebasestorage.app",
  messagingSenderId: "377336048896",
  appId: "1:377336048896:web:f960af655b68e02efc17e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);