// Import the functions you need from the SDKs you need
import * as firebase from "firebase"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPA1twvgqC4A9qyJa7yu6nXesLhI6J1S4",
  authDomain: "reactnativefirebaseapp-1cf4d.firebaseapp.com",
  projectId: "reactnativefirebaseapp-1cf4d",
  storageBucket: "reactnativefirebaseapp-1cf4d.appspot.com",
  messagingSenderId: "87088227198",
  appId: "1:87088227198:web:53c333b796c4f6881e892f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };