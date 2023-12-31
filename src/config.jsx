import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDNfsAZ7DyqZqzUVSeUxcOPw4p4KYNa-3k",
    authDomain: "todo-app-react360.firebaseapp.com",
    projectId: "todo-app-react360",
    storageBucket: "todo-app-react360.appspot.com",
    messagingSenderId: "556081631639",
    appId: "1:556081631639:web:92453e33f89b4de56d74d2",
    measurementId: "G-DX5GWJTEK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
