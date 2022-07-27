import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import auth from "../firebase-config";

export const authContext = createContext();
export const useAuth = () => {
    const context = useContext(authContext);
    return context;
};
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) =>
        await createUserWithEmailAndPassword(auth, email, password);

    const logIn = async (email, password) =>
        await signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    //para que este atento a los mov del usuario y se renderice los cambios
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); //cambia el estado del user a current
            setLoading(false);
        });

        return () => unsub; //desmontamos el componente y mandamos la data
    }, []);

    return (
        <authContext.Provider value={{ signUp, logIn, logOut, user, loading }}>
            {" "}
            {children}
        </authContext.Provider>
    );
}
