import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-plKiPQKKHYho0p0AQL54-5iHdrJkq3o",
  authDomain: "firegram-45efd.firebaseapp.com",
  databaseURL: "https://firegram-45efd.firebaseio.com",
  projectId: "firegram-45efd",
  storageBucket: "firegram-45efd.appspot.com",
  messagingSenderId: "979199409575",
  appId: "1:979199409575:web:189538872cd7bb25dcca82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
