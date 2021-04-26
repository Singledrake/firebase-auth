import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBKzrLM5nwK-0Zhr7Dl-38uQiplFpVyT9s",
    authDomain: "react-test-c91b1.firebaseapp.com",
    projectId: "react-test-c91b1",
    storageBucket: "react-test-c91b1.appspot.com",
    messagingSenderId: "848701002280",
    appId: "1:848701002280:web:67b40a8941874216f1db1d",
    measurementId: "G-WHRMFNDC82"
};
// Initialize Firebase
const fire =firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const auth = fire.auth();
export {auth};