// firebase
import firebase from "firebase/app";
import firebaseConfig from "./config";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/analytics";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();

export default firebaseApp;
