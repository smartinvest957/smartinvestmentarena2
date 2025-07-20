<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyB9nF_x45RPL4qN_O1xldhNhr_4AM5bXIg",
    authDomain: "smart-invest-tracker.firebaseapp.com",
    projectId: "smart-invest-tracker",
    storageBucket: "smart-invest-tracker.appspot.com",
    messagingSenderId: "464698438524",
    appId: "1:464698438524:web:fa266eb1b29604bb8a6af9",
    measurementId: "G-4YXZ0N9D5C"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
</script>
