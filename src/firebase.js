import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyDZJ9NtVq0JmJ6vRr-EXto-1hfW4Ji2lRA",
    authDomain: "recipe-sns.firebaseapp.com",
    databaseURL: "https://recipe-sns.firebaseio.com",
    projectId: "recipe-sns",
    storageBucket: "recipe-sns.appspot.com",
    messagingSenderId: "369121322514",
    appId: "1:369121322514:web:4947cdc9e5aa852d03dacb",
    measurementId: "G-H354P6W0M4"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
         