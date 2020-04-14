import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCxLfACF5gFvTIHM9HL-jlMOPGTT0vZz0U",
    authDomain: "cs3450-cb87c.firebaseapp.com",
    databaseURL: "https://cs3450-cb87c.firebaseio.com",
    projectId: "cs3450-cb87c",
    storageBucket: "cs3450-cb87c.appspot.com",
    messagingSenderId: "173750635966",
    appId: "1:173750635966:web:f02017e1df97fe88f27def",
    measurementId: "G-TBXXZJJ3HN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestore = firebaseApp.firestore();
  require('firebase/firestore');
  require('firebase/auth');
  export default firestore;

// to deploy vue.js app with firebase hosting
// npm install -g firebase-tools
// npm run build
// will point firebase to the dist folder
// firebase init
// select hosting
// config firebase.json to reference the dist folder
// {
//   "hosting": {
//     "public": "./dist"
//   }
// }
// firebase deploy