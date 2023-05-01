import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARMm4hKWhX05Vn4KVhij6VRbVeWQMPQNw",
  authDomain: "first-project-2d6c9.firebaseapp.com",
  projectId: "first-project-2d6c9",
  storageBucket: "first-project-2d6c9.appspot.com",
  messagingSenderId: "869214406303",
  appId: "1:869214406303:web:790b66a5af777e87ad84aa",
  measurementId: "G-PNYBPXWJQD",
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase; 