import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { FaCircleUser, FaGear } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";



const Nav = () => {
      const { user,logOut } = useContext(AuthContext)

    
      return (
            <div className=" container mx-auto pt-5">
                  <div className=" flex justify-between w-11/12 mx-auto md:w-full items-center">
                        <div className=" md:w-32">

                        </div>
                        <ul id="navLinks" className=" text-sm md:text-md gap-6 flex items-center text-gray-500">
                              <NavLink to={'/home'}>Home</NavLink>
                              <NavLink to={'/about'}>About</NavLink>
                              <NavLink to={'/career'}>Career</NavLink>
                        </ul>
                        <div className=" h-fit w-fit">
                              {
                                    user && user.email ? <div className=" flex items-center gap-2">
                                          <h1 className=" hidden md:flex text-md md:text-xl font-semibold">{user.displayName||"Anonymous"}</h1>
                                          <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                      <div className="w-10 rounded-full">
                                                            <img
                                                                  alt={user?.displayName}
                                                                  src={user.photoURL||"https://cdn2.vectorstock.com/i/1000x1000/44/01/default-avatar-photo-placeholder-icon-grey-vector-38594401.jpg"} />
                                                      </div>
                                                </div>
                                                <ul
                                                      tabIndex={0}
                                                      className="menu menu-sm dropdown-content rounded text-blue-600 bg-blue-100 z-[1] mt-3 w-52 p-2 shadow">
                                                      <li>
                                                            <a className="">
                                                                 <FaUserAlt></FaUserAlt>
                                                                  Profile
                                                            </a>
                                                      </li>
                                                      <li><Link to={'/updatepassword'}><FaGear></FaGear> Settings</Link></li>
                                                      <li onClick={logOut}><a>
                                                           <FaSignOutAlt></FaSignOutAlt> Logout </a></li>
                                                </ul>
                                          </div>
                                    </div>
                                          : <div className=" flex items-center gap-3">
                                                <FaCircleUser className=" text-3xl md:text-5xl text-blue-600"></FaCircleUser>
                                                <Link to={'/login'} className="btn btn-sm md:btn-md   md:px-7 rounded-none bg-blue-600 text-white hover:text-blue-600">Login</Link>
                                          </div>
                              }
                        </div>
                  </div>
            </div >
      );
};

export default Nav;