import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) => {
        console.log("signing up");
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const logIn = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user.email);
            })
            .catch((error) => {
                console.log(error);
            });

    const logOut = () =>
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser.email);
            setLoading(false);
        });

        return () => unsub;
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user, loading }}>
            {" "}
            {children}
        </AuthContext.Provider>
    );
}
