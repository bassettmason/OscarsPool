// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNfGaAkaqOedRmQdTjKhF5AOjzvNnXtHs",
  authDomain: "oscars-pool-16e82.firebaseapp.com",
  projectId: "oscars-pool-16e82",
  storageBucket: "oscars-pool-16e82.appspot.com",
  messagingSenderId: "927190600201",
  appId: "1:927190600201:web:496f1f552c7ea0c68f86d8"
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