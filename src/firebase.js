import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: ".......",
  authDomain: "instagram-clone-react-8f859.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-8f859-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-8f859",
  storageBucket: "instagram-clone-react-8f859.appspot.com",
  messagingSenderId: "844871740921",
  appId: "-------",
  measurementId: "-------"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


// export default db;
