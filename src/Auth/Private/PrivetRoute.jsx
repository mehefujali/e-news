import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivetRoute = ({children}) => {
      const location = useLocation()
     
      
      const {user,loading} = useContext(AuthContext)
       if(loading){
            return <div className=" w-fit mx-auto">
                  <span  className="loading loading-spinner loading-lg mx-auto fixed top-1/2"></span>
            </div>
       }
      if(user){
            return  children
      }
      return <Navigate state={location.pathname} to='/login' ></Navigate>
};
PrivetRoute.propTypes={
      children:PropTypes.object.isRequired
}
export default PrivetRoute;