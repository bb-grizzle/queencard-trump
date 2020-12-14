// firebase
import firebase from "firebase/app";
import firebaseConfig from "./config";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/analytics";

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp({
			apiKey: "AIzaSyCSn_g0l1s1olchFZFAT9hyw96-oBdDpHs",
			authDomain: "awesomeschool-ab371.firebaseapp.com",
			databaseURL: "https://awesomeschool-ab371.firebaseio.com",
			projectId: "awesomeschool-ab371",
			storageBucket: "awesomeschool-ab371.appspot.com",
			messagingSenderId: "837802291128",
			appId: "1:837802291128:web:ea355d7e578e592fa8294d",
			measurementId: "G-C58K83G1J3"
	  })
	: firebase.app();

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();

export const firebaseModule = firebase;

export default firebaseApp;
