import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB97jiWzx4DzLuoBT5ZzZ6l5ai41zd15Lw",
    authDomain: "codingnijas-photofolio.firebaseapp.com",
    projectId: "codingnijas-photofolio",
    storageBucket: "codingnijas-photofolio.appspot.com",
    messagingSenderId: "201744568838",
    appId: "1:201744568838:web:6544e5e0d483a30ff66987"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
