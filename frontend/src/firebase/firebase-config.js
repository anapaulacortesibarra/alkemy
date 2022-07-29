// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:  "AIzaSyCIbhayqtiibnbvzuCvVCIcF3RJEFl38mM",
    authDomain: "alkemychallenge-d08a5.firebaseapp.com",
    projectId: "alkemychallenge-d08a5",
    storageBucket: "alkemychallenge-d08a5.appspot.com",
    messagingSenderId: "674583787364",
    appId: "1:674583787364:web:84bed811b481dce809ec71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
