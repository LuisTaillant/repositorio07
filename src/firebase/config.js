import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_ef5g4iEbBDjSe2sKsP0hW9f6t9ISE3M",
  authDomain: "coderhouse19805-lt.firebaseapp.com",
  projectId: "coderhouse19805-lt",
  storageBucket: "coderhouse19805-lt.appspot.com",
  messagingSenderId: "988005939308",
  appId: "1:988005939308:web:f54ffba038434ca6d1c049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
