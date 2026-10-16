import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCc14sdJ9_nWE7aQIm0So-tLcX1YXDZRX0",
  authDomain: "koolchat.firebaseapp.com",
  projectId: "koolchat",
  storageBucket: "koolchat.firebasestorage.app",
  messagingSenderId: "750354859642",
  appId: "1:750354859642:web:3c9005425e616232d91dc3",
  measurementId: "G-EB22B4K66K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);


document.querySelector('#signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;
  const username = document.querySelector('#signup-username').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
      const user = userCredential.user;
      updateProfile(user, { displayName: username })
        .then(() => {
          console.log("Profile updated successfully.");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
});

