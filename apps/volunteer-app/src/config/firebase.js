import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 dev
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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
 main
