import "./firbaseConfig";
import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp 
} from "firebase/firestore"
import {
    getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword
} from "firebase/auth"

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// signing users up
const signupForm = document.querySelector(".signUpForm");
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const name = signupForm.name.value;
    const birthday = signupForm.date.value;
    const subscribe = signupForm.formcheck.checked;

    try {
        // 1. 創建用戶
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. 將額外信息存儲到Firestore
        const userDocRef = await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            birthday: birthday,
            subscribe: subscribe,
            // 其他可能的用戶信息...
        });

        console.log("User created with UID:", user.uid);
        console.log("User document written with ID:", userDocRef.id);

        // 清空表單
        signupForm.reset();
    } catch (error) {
        console.error("Error creating user:", error.message);
    }
});