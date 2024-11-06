/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  AuthProvider as FirebaseAuthProviderType,
} from "firebase/auth";
import app from "../../config/Firebase/firebase.init";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  createUser: (email: string, password: string) => Promise<void>;
  Login: (email: string, password: string) => Promise<void>;
  googleSignIn: (provider: FirebaseAuthProviderType) => Promise<void>;
  LogOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
const auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | null; // The user is either a User object or null
  LogOut: () => void;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = async (
    provider: FirebaseAuthProviderType
  ): Promise<void> => {
    await signInWithPopup(auth, provider);
  };

  const LogOut = (): void => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo: AuthContextProps = {
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
