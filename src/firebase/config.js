import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// "AIzaSyCIh7sKVCdeRT9wOtFZ8SB_KfQOaPGYzPY"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "home-84cd6.firebaseapp.com",
  projectId: "home-84cd6",
  storageBucket: "home-84cd6.appspot.com",
  messagingSenderId: "1070746148294",
  appId: "1:1070746148294:web:e53582c2d9ea716db326c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)