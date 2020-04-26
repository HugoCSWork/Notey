import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-dJSHxm-n33ZlMJiDD6AcAI14MsRtMpk",
  authDomain: "hotelpal-auth.firebaseapp.com",
  databaseURL: "https://hotelpal-auth.firebaseio.com",
  projectId: "hotelpal-auth",
  storageBucket: "hotelpal-auth.appspot.com",
  messagingSenderId: "442624371544",
  appId: "1:442624371544:web:47bc848b520ff2136f932d",
  measurementId: "G-N30XPD087L",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
export default firebase;
