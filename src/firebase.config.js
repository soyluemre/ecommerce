import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBybnTrMAMn5vGOjwQXOYCH04n1MNsFKvk",
  authDomain: "online-shop-redux.firebaseapp.com",
  projectId: "online-shop-redux",
  storageBucket: "online-shop-redux.appspot.com",
  messagingSenderId: "212760439244",
  appId: "1:212760439244:web:db1c4550547e7534ff5569",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
