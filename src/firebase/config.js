// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEr5vFAS5HohLQlRun_iRufDIGRNexWcI",
    authDomain: "footballboots-20832.firebaseapp.com",
    projectId: "footballboots-20832",
    storageBucket: "footballboots-20832.appspot.com",
    messagingSenderId: "603184715995",
    appId: "1:603184715995:web:3e48ff995bc3f9b84b94fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


