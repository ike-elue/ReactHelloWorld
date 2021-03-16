import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAPHD1D4nIBsZUroOPuPat5q5oA0cq8Og8",
    authDomain: "helloworldservices-d1766.firebaseapp.com",
    databaseURL: "https://helloworldservices-d1766-default-rtdb.firebaseio.com",
    projectId: "helloworldservices-d1766",
    storageBucket: "helloworldservices-d1766.appspot.com",
    messagingSenderId: "286320614488",
    appId: "1:286320614488:web:3e586475ab038cb50afe2d",
    measurementId: "G-G45E908B17"
};

firebase.initializeApp(firebaseConfig);

export { firebase };