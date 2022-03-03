import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAnKH1FP5YfCM70dw2zP_zRzov1rMoTnnQ",
  authDomain: "todoapps-9bc24.firebaseapp.com",
  projectId: "todoapps-9bc24",
  storageBucket: "todoapps-9bc24.appspot.com",
  messagingSenderId: "386440175800",
  appId: "1:386440175800:web:0529ec60e3f6c4ef99d44d",
  measurementId: "G-17MHPW76XX"
};

const app=initializeApp(firebaseConfig);
export const db= getFirestore(app);