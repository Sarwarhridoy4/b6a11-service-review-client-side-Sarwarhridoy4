import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email password

  const createUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email password

  const Login = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  //impliment google signIn/Signup

  const googleSignIn = (provider) => {
    return signInWithPopup(auth,provider)
  }
  //sign out

  const LogOut = () => {
    signOut(auth)
      .then(() => {
      setUser(null)
    })
  }
  


  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
     setUser(currentUser);
     setLoading(false)
   });
      
      return () => {
        return unsubscribe();
        
    }
   
  }, []);

  

  
 const authInfo = {
    user,
   loading,
    setLoading,
    createUser,
    Login,
   googleSignIn,
   LogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
