import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD13yYGKml-NNrL_pEzMValp-Rt8lcfgB8",
    authDomain: "howdy-2bb9b.firebaseapp.com",
    projectId: "howdy-2bb9b",
    storageBucket: "howdy-2bb9b.appspot.com",
    messagingSenderId: "498581309776",
    appId: "1:498581309776:web:c32abac02c753bff888455"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
   
  const auth = getAuth(app);

  const signInWithEmail = (email: string, password: string) => {createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  export { db, auth,signInWithEmail }
