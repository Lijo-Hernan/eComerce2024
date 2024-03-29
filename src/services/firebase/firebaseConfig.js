import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.VITE_measurementId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAYmeVOsffSLkWPpsQ8qu6ZSgFZ-CTVYR0",
//   authDomain: "ecomerce2024-7e06d.firebaseapp.com",
//   projectId: "ecomerce2024-7e06d",
//   storageBucket: "ecomerce2024-7e06d.appspot.com",
//   messagingSenderId: "377640463322",
//   appId: "1:377640463322:web:c1d335604eb18cfafb2ee3",
//   measurementId: "G-DXJQ5CGKSP"
// };



// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)