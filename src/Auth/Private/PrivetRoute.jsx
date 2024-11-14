import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivetRoute = ({children}) => {
      const {user} = useContext(AuthContext)

      if(user){
            return  children
      }
      return <Navigate to='/login' ></Navigate>
};
PrivetRoute.propTypes={
      children:PropTypes.object.isRequired
}
export default PrivetRoute;