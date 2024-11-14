import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {




     const authInfo ={
      name: 'kiron'
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