// firebase.js
// Firebase configuration and initialization for SmartInvest Arena

// Firebase App (the core Firebase SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nF_x45RPL4qN_O1xldhNhr_4AM5bXIg",
  authDomain: "smart-invest-tracker.firebaseapp.com",
  projectId: "smart-invest-tracker",
  storageBucket: "smart-invest-tracker.appspot.com",
  messagingSenderId: "464698438524",
  appId: "1:464698438524:web:fa266eb1b29604bb8a6af9",
  measurementId: "G-4YXZ0N9D5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Auth check
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Logout function
export function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
