import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1. seed the database
// 2. config the database

// seed.  DO NOT UNCOMMENT THIS!
// import  { seedDatabase } from '../seed';
// seedDatabase(firebase);

// config
const config = {
    apiKey: "AIzaSyAMxrHP4JBcEwolh6h8lhDfIU9RucYx0c0",
    authDomain: "holodeck-ab359.firebaseapp.com",
    projectId: "holodeck-ab359",
    storageBucket: "holodeck-ab359.appspot.com",
    messagingSenderId: "213296400978",
    appId: "1:213296400978:web:f23c2f689cfc8689682d8b",
    measurementId: "G-6M122JJR21"
};

const firebase = Firebase.initializeApp(config);

export { firebase };