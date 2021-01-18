import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBFSgNzncL6Wu_zfECo5Oayt37_oiRyEJU",
    authDomain: "linkedin-clone-3a552.firebaseapp.com",
    projectId: "linkedin-clone-3a552",
    storageBucket: "linkedin-clone-3a552.appspot.com",
    messagingSenderId: "296931513966",
    appId: "1:296931513966:web:1ab9c6feca25e82dfb387f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};