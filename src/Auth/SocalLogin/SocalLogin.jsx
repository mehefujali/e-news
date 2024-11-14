import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";


const SocalLogin = () => {
      const {googleLogIn,setUser} = useContext(AuthContext)
      const handleGoogleLogin = ()=> {
            googleLogIn()
            .then(res=> setUser(res.user))
      }
      return (
            <div>
                  <h2 className=" text-sm xl:text-xl font-bold">Login with</h2>
                  <div className=" mt-4 space-y-2  flex flex-col">
                        <button onClick={handleGoogleLogin} className=" btn  btn-outline xl:text-lg gap-2 flex  items-center" ><FaGoogle className=" text-2xl"></FaGoogle> <span>Login with Google</span></button>
                        <button className="btn text-blue-500 btn-outline  xl:text-lg gap-2 flex  items-center" ><FaFacebook className=" text-2xl"></FaFacebook> <span >Login with Facebook</span></button>
                        
                  </div>
            </div>
      );
};

export default SocalLogin;