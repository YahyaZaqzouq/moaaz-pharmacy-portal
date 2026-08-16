// ==============================================================
// إعدادات Firebase — بوابة بيانات فروع صيدلية معاذ
// ==============================================================
// هنا لازم تحط بيانات مشروعك من Firebase Console:
// Project settings → General → Your apps → SDK setup and configuration
//
// استبدل القيم بالـ config بتاعك (زي المثال ده):
// const firebaseConfig = {
//   apiKey: "AIzaSy...",
//   authDomain: "moaz-pharmacy-portal.firebaseapp.com",
//   projectId: "moaz-pharmacy-portal",
//   storageBucket: "moaz-pharmacy-portal.appspot.com",
//   messagingSenderId: "...",
//   appId: "..."
// };
// ==============================================================

const firebaseConfig = {
  apiKey: "AIzaSyA-7bpQqIATzvQYzwfUZDnI-53Z1hN1cPw",
  authDomain: "moaazdata-547ee.firebaseapp.com",
  projectId: "moaazdata-547ee",
  storageBucket: "moaazdata-547ee.firebasestorage.app",
  messagingSenderId: "756048402155",
  appId: "1:756048402155:web:e19f9c979645fd067210ae"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  query, orderBy, where, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db, auth, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  query, orderBy, where, limit, serverTimestamp,
  signInWithEmailAndPassword, onAuthStateChanged, signOut
};
