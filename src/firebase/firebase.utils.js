import firebase from 'firebase/app';
import 'firebase/firestore'; //for database storage
import 'firebase/auth'; //for authentication

const config = {
    apiKey: "AIzaSyCOig5ppzg5N6BmcTf7Zb4Cql7qnZXFaNA",
    authDomain: "modern-db-13ffe.firebaseapp.com",
    databaseURL: "https://modern-db-13ffe.firebaseio.com",
    projectId: "modern-db-13ffe",
    storageBucket: "modern-db-13ffe.appspot.com",
    messagingSenderId: "1007448718240",
    appId: "1:1007448718240:web:495f154cf9b380ff1ac2c5",
    measurementId: "G-QB99HJ1870"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
