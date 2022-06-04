// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMgn6BzUF44UGTy8APmWkkKu6THBaVX9o",
    authDomain: "new-ema-john-project.firebaseapp.com",
    projectId: "new-ema-john-project",
    storageBucket: "new-ema-john-project.appspot.com",
    messagingSenderId: "270186460032",
    appId: "1:270186460032:web:3bb56a1c4cb45c7a2b4765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;