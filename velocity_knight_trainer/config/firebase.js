// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2hxL1b_9Ds3Qr_7rCAduJprcEVRxHZmM",
    authDomain: "work-profile-e0686.firebaseapp.com",
    projectId: "work-profile-e0686",
    storageBucket: "work-profile-e0686.appspot.com",
    messagingSenderId: "1014715331304",
    appId: "1:1014715331304:web:891e1098496298b7e30f5d",
    measurementId: "G-ER6R1QWR8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default app;