import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()

  const googleLogIn = () => {
      return signInWithPopup(auth,googleProvider)
      
  }
  useEffect(()=>{
      onAuthStateChanged(auth,(curentUser)=>{
            setUser(curentUser)
      })
  },[])
  

     const authInfo ={
      googleLogIn,
      user,
      setUser,
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