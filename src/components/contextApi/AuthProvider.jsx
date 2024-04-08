import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

export const authContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();


const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    const [loading ,setLoading ] =useState(true)

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email , password)=>{
        return signInWithEmailAndPassword(auth ,email , password);
    }

    const logoutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // social login
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,googleProvider)
    }

    const githubLogIn = ()=>{
        return signInWithPopup(auth , githubProvider);
    }
    const twitterLogIn = ()=>{
        return signInWithPopup(auth , twitterProvider);
    }



    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signUpUser,
        googleLogin,
        githubLogIn,
        twitterLogIn,
        loginUser,
        logoutUser,
        loading

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