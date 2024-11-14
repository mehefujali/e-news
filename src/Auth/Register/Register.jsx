import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Register = () => {
      const {googleLogIn,setUser} = useContext(AuthContext)
      const handleGoogleLogin = () => {
            googleLogIn()
            .then(res=>{
                  setUser(res.user);
                  
            })
            .catch(err => {
                  console.log(err);
                  
            })
      }
      return (
            <div className="bg-blue-100" >
            <Nav></Nav>
            <div className=" container mx-auto h-[calc(100vh-68px)]  flex justify-center items-center">
                 <div className=" max-w-lg mx-auto p-10 bg-white rounded shadow-md">
                       <h1 className=" text-2xl md:text-4xl font-bold">Register your account</h1>
                       <div className=" divider"></div>
                       <form action="" className=" w-full flex flex-col gap-3">
                             <label htmlFor="">
                                   <p className=" font-semibold">Name</p>
                                   <input placeholder=" Enter your name"  type="text " className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                             </label>
                             <label htmlFor="">
                                   <p className=" font-semibold">Photo url</p>
                                   <input placeholder=" Enter your photo url"  type="text " className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                             </label>
                             <label htmlFor="">
                                   <p className=" font-semibold">Email address</p>
                                   <input placeholder=" Enter your email address"  type="text " className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                             </label>
                             <label htmlFor="">
                                   <p className=" font-semibold">Password</p>
                                   <input placeholder=" Enter your Password"  type="password" className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                             </label>
                             <button className="btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full   rounded">Login</button>
                       </form>
                       <p className=" text-sm mt-3">Already have An Account ? <Link className=" text-blue-600 font-semibold" to={'/login'}>Login</Link></p>
                       <div className=" divider">OR</div>
                       <div className=" flex gap-3 text-3xl items-center justify-center">
                             <FaGoogle onClick={handleGoogleLogin}  className=" text-red-600 cursor-pointer"></FaGoogle>
                             <FaFacebook className=" text-blue-600 cursor-pointer"></FaFacebook>
                             <FaTwitter className=" text-blue-400 cursor-pointer"></FaTwitter>
                       </div>
                 </div>
            </div>
     </div>
      );
};

export default Register;