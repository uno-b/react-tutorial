import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCz4yqAWyJgbPffAWI9b3XNKjpwgWpQLZ4",
  authDomain: "net-ninja-marioplan-uno.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-uno.firebaseio.com",
  projectId: "net-ninja-marioplan-uno",
  storageBucket: "net-ninja-marioplan-uno.appspot.com",
  messagingSenderId: "294876730665",
  appId: "1:294876730665:web:28d0ad3e43828d660a9338",
  measurementId: "G-PHL6X1Z4GY",
};
firebase.initializeApp(config);

export default firebase;
