import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDCwgIifGHHhyhxzqKuScfq5EVLOY9FBiM",

  authDomain: "zflix-77be9.firebaseapp.com",

  projectId: "zflix-77be9",

  storageBucket: "zflix-77be9.appspot.com",

  messagingSenderId: "955273201345",

  appId: "1:955273201345:web:ddac8a13d124a2d916b640",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
// export default db;
