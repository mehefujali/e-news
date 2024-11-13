import { NavLink } from "react-router-dom";
import './nav.css'
import { FaCircleUser } from "react-icons/fa6";


const Nav = () => {
      return (
            <div className=" container mx-auto mt-5">
                  <div className=" flex justify-between items-center">
                        <div>

                        </div>
                        <ul id="navLinks" className=" gap-6 flex items-center text-gray-500">
                              <NavLink to={'/home'}>Home</NavLink>
                              <NavLink to={'/about'}>About</NavLink>
                              <NavLink to={'/career'}>Career</NavLink>
                        </ul>
                        <div className=" h-fit w-fit">
                              <div className=" flex items-center gap-3">
                                    <FaCircleUser className=" text-3xl text-blue-600"></FaCircleUser>
                                    <button className="btn btn-sm   px-7 rounded-none bg-blue-600 text-white">Login</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Nav;