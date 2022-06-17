import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KxsTMRLRVsnaO7f3QxhzG9uhFfd_Jcw",
    authDomain: "dental-website-347119.firebaseapp.com",
    projectId: "dental-website-347119",
    storageBucket: "dental-website-347119.appspot.com",
    messagingSenderId: "467525941291",
    appId: "1:467525941291:web:e23856d202cc9c841bd26e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Storage.
export const storage = getStorage(app)
// DataBase.
export const db = getFirestore(app)
// Authentication.
export const auth = getAuth(app)
