import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivetRoute = ({children}) => {
      const location = useLocation()
      console.log(location);
      
      const {user} = useContext(AuthContext)
       
      if(user){
            return  children
      }
      return <Navigate state={location.pathname} to='/login' ></Navigate>
};
PrivetRoute.propTypes={
      children:PropTypes.object.isRequired
}
export default PrivetRoute;