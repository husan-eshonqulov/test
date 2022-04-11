import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyDGhNtbg2jRn6jcrh_uXSedqHokY4HWcTM",
//     authDomain: "fir-test-bd5f4.firebaseapp.com",
//     projectId: "fir-test-bd5f4",
//     storageBucket: "fir-test-bd5f4.appspot.com",
//     messagingSenderId: "712105163496",
//     appId: "1:712105163496:web:17f2d35b7c0c7f049fa75d",
//     measurementId: "G-8N60K4XEGW"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);