import { NavLink } from "react-router-dom";
import './nav.css'

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
                        <div>

                        </div>
                  </div>
            </div>
      );
};

export default Nav;