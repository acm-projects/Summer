// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq_KOJzxE8zKAkKkfxrgImegXHa25iWPw",
  authDomain: "storage-4c17c.firebaseapp.com",
  projectId: "storage-4c17c",
  storageBucket: "storage-4c17c.appspot.com",
  messagingSenderId: "1068299836155",
  appId: "1:1068299836155:web:68126e054811b89e432e5e",
  measurementId: "G-PDG533EJHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);