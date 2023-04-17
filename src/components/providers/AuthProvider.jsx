import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading]= useState(true)
    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Log in
    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out

    const logOut = () => {
        return signOut(auth);
    }

    // Observed User Auth State
    useEffect(() => {
      const unSubscribe=   onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        // Stop Observed While Unmounting
        return ()=>{
            return unSubscribe();
        }
    }, [])
    const authInfo = {
        success,
        error,
        setSuccess,
        setError,
        user,
        setUser,
        loading,
        createUser,
        loginWithEmailAndPass,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;