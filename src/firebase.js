import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBJ-A_V9GDKNQvh8sjphUz4Tr2csDC4NyU",
  authDomain: "con-room.firebaseapp.com",
  projectId: "con-room",
  storageBucket: "con-room.appspot.com",
  messagingSenderId: "944884466167",
  appId: "1:944884466167:web:cb1b59f02379bf6c03eef2",
  measurementId: "G-JYV2LWB63W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
