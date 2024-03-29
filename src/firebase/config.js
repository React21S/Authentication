import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzm7IcHSPqT1yChCO10PbxGIT9PQJe-H8",
    authDomain: "npscore-72b0f.firebaseapp.com",
    projectId: "npscore-72b0f",
    storageBucket: "npscore-72b0f.appspot.com",
    messagingSenderId: "316096713476",
    appId: "1:316096713476:web:be091c0bd411302c73f651"
};

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init service
  const projectFirestore= firebase.firestore()
  const projectAuth = firebase.auth()
// timestamp
  const timestamp = firebase.firestore.Timestamp

  export{projectFirestore, projectAuth, timestamp}