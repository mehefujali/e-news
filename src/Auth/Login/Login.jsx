import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";




const Login = () => { 
      const {googleLogIn,setUser,siginInEmail,user} = useContext(AuthContext)
      const location = useLocation()
   
      const navigate = useNavigate()
      
      const handleGoogleLogin = () => {
            
            googleLogIn()
            .then(res=>{
                  setUser(res.user);
                  navigate(location.state||'/home')
                  
            })
            .catch(err=> {
                  console.log(err);
                  
            })
      }
      const handleEmailLogin = (e) => {
            e.preventDefault()
            const form = e.target 
            const email = form.email.value 
            const password = form.password.value 
            siginInEmail(email,password)
            .then(res => {
                  setUser(res.user)
                  navigate(location.state||'/home')
            })
            .catch(err=>{
                  console.log(err.message);
                  if(err.message==='Firebase: Error (auth/invalid-credential).'){
                        toast.error("Invalid Password")
                  }

                  
            })
      }
      
      
      if(user){
            return<Navigate to={location.state||'/home'}></Navigate>
      }
      
      return (
            <div className="bg-blue-100" >
                   <Nav></Nav>
                   <div className=" container mx-auto h-[calc(100vh-68px)]  flex justify-center items-center">
                        <div className=" w-11/12 md:max-w-md  mx-auto p-7 md:p-10 bg-white rounded shadow-md">
                              <h1 className=" text-xl  text-center md:text-4xl font-bold">Login your account</h1>
                              <div className=" divider"></div>
                              <form onSubmit={handleEmailLogin} action="" className=" w-full flex flex-col gap-3">
                                    <label htmlFor="">
                                          
                                          <p className=" font-semibold text-xs md:text-md">Email address</p>
                                          <input 
                                          name="email"
                                          placeholder=" Enter your email address"  type="text " className=" text-xs input-sm md:input-md md:text-md input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <label htmlFor="">
                                          <p className=" text-xs md:text-md font-semibold">Password</p>
                                          <input 
                                          name="password"
                                          placeholder=" Enter your Password"  type="password" className="input input-sm md:input-md text-xs md:text-md w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <Link className="text-xs md:text-md" to={'/forgetpassword'}>Forget password ?</Link>
                                    <button  className="btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full  btn-sm md:btn-md  rounded">Login</button>
                              </form>
                              <p className=" text-xs md:text-sm mt-3">Dont’t Have An Account ? <Link className=" text-blue-600 font-semibold" to={'/register'} state={location.state}> Register</Link></p>
                              <div className=" divider text-xs md:text-md">OR</div>
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

export default Login;