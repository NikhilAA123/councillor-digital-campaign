import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGMEeL3M_cqAIkqqsDEmdsOK_EzOW1q-g",
  authDomain: "councillor-digital-campaign.firebaseapp.com",
  projectId: "councillor-digital-campaign",
  storageBucket: "councillor-digital-campaign.firebasestorage.app",
  messagingSenderId: "948611965734",
  appId: "1:948611965734:web:733993fb456aa4f95017e7",
  measurementId: "G-NZ9G0JFMQJ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
