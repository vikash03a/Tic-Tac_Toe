import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6GFJLDkcWILSr4DHtQZP1oui8C8aE_ZM",
  authDomain: "tic-tac-toe-fcfc4.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-fcfc4-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-fcfc4",
  storageBucket: "tic-tac-toe-fcfc4.appspot.com",
  messagingSenderId: "830497934678",
  appId: "1:830497934678:web:eb69068309e7fc8e6c1af7"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export default db;