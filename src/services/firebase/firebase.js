import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWtZ3G3hErcJKSn7ozKnrZMXP6gY3E8Og",
    authDomain: "proyecto-react-lanatti.firebaseapp.com",
    projectId: "proyecto-react-lanatti",
    storageBucket: "proyecto-react-lanatti.appspot.com",
    messagingSenderId: "241862208111",
    appId: "241862208111:web:b1ce0a2b53eb539bf4fb9a"
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
  };

  const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);