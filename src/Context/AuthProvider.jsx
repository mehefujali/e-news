import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)
      const [loading,setLoading] = useState(true)
      const googleProvider = new GoogleAuthProvider()

  const googleLogIn = () => {
      return signInWithPopup(auth,googleProvider)
      
  }
  const emailRegister =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
  }
  const siginInEmail = (email,password) => {
      return  signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(()=>{
     const unSubscrbe = onAuthStateChanged(auth,(curentUser)=>{
            setUser(curentUser)
            setLoading(false)
      })
      return ()=>{
            unSubscrbe()
      }
  },[])

  const logOut = () => {
      signOut(auth)
  }
  

     const authInfo ={
      googleLogIn,
      user,
      setUser,
      logOut,
      emailRegister,
      siginInEmail,
      loading,
      setLoading,
     }

      return (
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
      );
};
AuthProvider.propTypes={
      children:PropTypes.object.isRequired
}
export default AuthProvider;