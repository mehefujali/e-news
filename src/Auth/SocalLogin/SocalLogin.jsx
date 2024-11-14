import { FaFacebook, FaGoogle } from "react-icons/fa";


const SocalLogin = () => {
      return (
            <div>
                  <h2 className=" text-xl font-bold">Login with</h2>
                  <div className=" mt-4 space-y-2  flex flex-col">
                        <button className=" btn  btn-outline text-lg gap-2 flex  items-center" ><FaGoogle className=" text-2xl"></FaGoogle> <span>Login with Google</span></button>
                        <button className="btn text-blue-500 btn-outline text-lg gap-2 flex  items-center" ><FaFacebook className=" text-2xl"></FaFacebook> <span>Login with Facebook</span></button>
                        
                  </div>
            </div>
      );
};

export default SocalLogin;