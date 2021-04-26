import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
const fire =firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const auth = fire.auth();
export {auth};