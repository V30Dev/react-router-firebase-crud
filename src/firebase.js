import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-YjRbV3M7W00HlM9IC_JH85_8b416fQI",
  authDomain: "router-login-bluuweb.firebaseapp.com",
  projectId: "router-login-bluuweb",
  storageBucket: "router-login-bluuweb.appspot.com",
  messagingSenderId: "388982255340",
  appId: "1:388982255340:web:fd2f9299a8746223163fc9",
  measurementId: "G-MGWD9Z0LED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}