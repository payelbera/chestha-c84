import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA7SKCQv8PmIv3OygZ-nMwd9aP-l4DOsUs",
    authDomain: "booksanta-76d81.firebaseapp.com",
    databaseURL: "https://booksanta-76d81.firebaseio.com",
    projectId: "booksanta-76d81",
    storageBucket: "booksanta-76d81.appspot.com",
    messagingSenderId: "734643859895",
    appId: "1:734643859895:web:43b5d02faa30e37a5d7832"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();