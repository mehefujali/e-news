import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { useContext} from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from 'react-toastify';


const Register = () => {
      const location = useLocation()
     

      const navigate = useNavigate()
      const { googleLogIn, setUser, emailRegister, user, updateUserProfile } = useContext(AuthContext)
      const handleGoogleLogin = () => {
            googleLogIn()
                  .then(res => {
                        setUser(res.user);
                        navigate(location.state || '/')

                  })
                  .catch(err => {
                        console.log(err);

                  })
      }
      const handleEmailRegister = (e) => {
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            const name = form.name.value
            const photourl = form.photourl.value
            if (password.length < 6) {
                  toast.error('Password should be at least 6 characters')
                  return
            }

            emailRegister(email, password)

                  .then(res => {
                        setUser(res.user)
                        updateUserProfile({ displayName: name, photoURL: photourl })
                              .then(() => {
                                    navigate('/')
                              })
                              .catch(err => {
                                    console.log(err);

                              })
                  })
                  .catch(err => {
                        console.log(err);

                  })
      }
      if (user) {
            return <Navigate to={location.state || '/'}></Navigate>
      }
      return (
            <div className="bg-blue-100" >
                 
                  <Nav></Nav>
                  <div className=" container mx-auto min-h-[calc(100vh-52px)] md:min-h-[calc(100vh-68px)]  flex justify-center items-center">
                        <div className=" w-11/12  md:max-w-lg mx-auto p-10 bg-white rounded shadow-md">
                              <h1 className=" text-lg md:text-3xl font-bold">Register your account</h1>
                              <div className=" divider"></div>
                              <form onSubmit={handleEmailRegister} className=" w-full flex flex-col gap-3">
                                    <label htmlFor="">
                                          <p className=" font-semibold text-xs md:text-md">Name*</p>
                                          <input
                                                required
                                                name="name"
                                                placeholder="  Enter your name" type="text " className="input input-sm md:input-md text-xs md:text-md w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <label htmlFor="">

                                          <p className=" text-xs md:text-md font-semibold">Photo url</p>
                                          <input
                                                name="photourl"
                                                placeholder="  Enter your photo url" type="text " className="input input-sm md:input-md text-xs md:text-md w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <label htmlFor="">
                                          <p className=" text-xs md:text-md font-semibold">Email address*</p>
                                          <input
                                                name="email"
                                                placeholder="  Enter your email address" type="email" className="input input-sm text-xs md:text-md md:input-md w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <label htmlFor="">
                                          <p className=" font-semibold text-xs md:text-md">Password*</p>
                                          <input
                                                name="password"
                                                placeholder=" Enter your Password" type="password" className="text-xs md:text-md input-sm md:input-md input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                                    </label>
                                    <button className="btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full btn-sm md:btn-md text-xs md:text-md   rounded">Create account</button>
                              </form>
                              <p className=" text-xs md:text-md mt-3 ">Already have An Account ? <Link className=" text-blue-600 font-semibold" to={'/login'}>Login</Link></p>
                              <div className=" divider text-xs md:text-md">OR</div>
                              <div className=" flex gap-3 text-3xl items-center justify-center">
                                    <FaGoogle onClick={handleGoogleLogin} className=" text-red-600 cursor-pointer"></FaGoogle>
                                    <FaFacebook className=" text-blue-600 cursor-pointer"></FaFacebook>
                                    <FaTwitter className=" text-blue-400 cursor-pointer"></FaTwitter>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;