import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "notey-app-88ade.firebaseapp.com",
  databaseURL: "https://notey-app-88ade.firebaseio.com",
  projectId: "notey-app-88ade",
  storageBucket: "notey-app-88ade.appspot.com",
  messagingSenderId: "1073628692089",
  appId: "1:1073628692089:web:58a8b6cb668453654f5ea8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
export default firebase;
