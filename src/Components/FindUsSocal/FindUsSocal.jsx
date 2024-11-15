import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FindUsSocal = () => {
      return (
            <div>
                  <h2 className=" text-xl font-bold">Find Us On</h2>
                  <div className="mt-3">
                        <div className="join join-vertical   flex flex-col rounded-md">
                              <Link to={'https://www.facebook.com/kiron8391/'} className="btn text-lg btn-outline join-item text-blue-500 "><FaFacebook className=" xl:text-2xl"></FaFacebook> Facebook</Link>
                              <Link className="btn text-lg btn-outline join-item text-blue-500"><FaTwitter className=" xl:text-2xl"></FaTwitter> Twitter</Link>
                              <Link to={'https://www.linkedin.com/in/mehefuj-ali-232741306'}className="btn text-lg btn-outline join-item text-blue-500"><FaLinkedin className=" xL:text-3xl"></FaLinkedin> Linkedin</Link>
                        </div>
                  </div>
            </div>
      );
};

export default FindUsSocal;