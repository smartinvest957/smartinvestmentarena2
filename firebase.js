// firebase.js
// Firebase configuration and initialization for SmartInvest Arena

// Firebase App (the core Firebase SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nF_x45RPL4qN_O1xldhNhr_4AM5bXIg",
  authDomain: "smart-invest-tracker.firebaseapp.com",
  projectId: "smart-invest-tracker",
  storageBucket: "smart-invest-tracker.appspot.com",
  messagingSenderId: "464698438524",
  appId: "1:464698438524:web:fa266eb1b29604bb8a6af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export for use in other scripts
export { auth };
