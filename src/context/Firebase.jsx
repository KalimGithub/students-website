import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCNdERYNVwC6fUHjk4EgTFa9oZ11A2jLC0",
  authDomain: "students-web-app-1815b.firebaseapp.com",
  projectId: "students-web-app-1815b",
  storageBucket: "students-web-app-1815b.firebasestorage.app",
  messagingSenderId: "868922939356",
  appId: "1:868922939356:web:ae657bb4821dff2fc7a119",
};
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      // console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const loginUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };
  const signOutUser = async () => {
    await signOut(firebaseAuth)
      .then(() => {
        console.log("sign out success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateNewList = async (inputs) => {
    try {
      await addDoc(collection(firestore, "students"), {
        inputs,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const listAllStudents = async () => {
    return getDocs(collection(firestore, "students"));
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signUpUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        signOutUser,
        handleCreateNewList,
        listAllStudents,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
