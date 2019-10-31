 import firebase from 'firebase'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCVF1fsgqwSnrGSl88qsI0vfBEGBIr7FD0",
    authDomain: "tiko-b6000.firebaseapp.com",
    databaseURL: "https://tiko-b6000.firebaseio.com",
    projectId: "tiko-b6000",
    storageBucket: "tiko-b6000.appspot.com",
    messagingSenderId: "929677980898",
    appId: "1:929677980898:web:31424e73d4c45e37c05abb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   //firebase.initializeApp(config);

   export default firebase;