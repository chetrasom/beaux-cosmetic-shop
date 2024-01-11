// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8qrsmDPaFDwBJdEFCj_8pox3yho1enj0",
  authDomain: "beaux-e-commerce.firebaseapp.com",
  projectId: "beaux-e-commerce",
  storageBucket: "beaux-e-commerce.appspot.com",
  messagingSenderId: "324531229137",
  appId: "1:324531229137:web:65e3f792f74757d9b910f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);