import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logoutUser =()=>{
        return signOut(auth)
    }



    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signUpUser,
        logoutUser

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}