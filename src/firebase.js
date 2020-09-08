import firebase from "firebase";

  const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCP9ek5AtyGKi-64l1qPy2KdEB6VZrdsvM",
  authDomain: "instagram-clone-81061.firebaseapp.com",
  databaseURL: "https://instagram-clone-81061.firebaseio.com",
  projectId: "instagram-clone-81061",
  storageBucket: "instagram-clone-81061.appspot.com",
  messagingSenderId: "564707619867",
  appId: "1:564707619867:web:965c54f53eed310a6734be",
  measurementId: "G-D08DRDV2E3"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export { db, auth, storage};


  //export default db: