// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9nF_x45RPL4qN_O1xldhNhr_4AM5bXIg",
  authDomain: "smart-invest-tracker.firebaseapp.com",
  projectId: "smart-invest-tracker",
  storageBucket: "smart-invest-tracker.appspot.com",
  messagingSenderId: "464698438524",
  appId: "1:464698438524:web:03449f9e5013bedc8a6af9",
  measurementId: "G-E447YBQTG5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
