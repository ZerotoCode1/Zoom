import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXjUFBIjbFIhlwWYhpSdEgZs8W0OKseME",
  authDomain: "zoomapp-4d553.firebaseapp.com",
  projectId: "zoomapp-4d553",
  storageBucket: "zoomapp-4d553.appspot.com",
  messagingSenderId: "233642343074",
  appId: "1:233642343074:web:7c7f6fc9ec887d55aa35fb",
  measurementId: "G-5J65VFPBPS"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
