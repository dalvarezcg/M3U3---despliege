import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFTOBrkOaTVNI_t6c9NEPiETUuLAKoZUc",
  authDomain: "prueba-618de.firebaseapp.com",
  projectId: "prueba-618de",
  storageBucket: "prueba-618de.firebasestorage.app",
  messagingSenderId: "909574143662",
  appId: "1:909574143662:web:2fe5a21a03ecf16296b73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database