import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyAHJDQ0rxv6bZQiBMwHGpHbYXjGp6acGeg",
    authDomain: "conplaint-forum.firebaseapp.com",
    projectId: "conplaint-forum",
    storageBucket: "conplaint-forum.appspot.com",
    messagingSenderId: "1044769517019",
    appId: "1:1044769517019:web:85ddce619fdfacabe28bfe"
  };
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

