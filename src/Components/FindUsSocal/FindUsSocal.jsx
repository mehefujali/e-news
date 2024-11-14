import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsSocal = () => {
      return (
            <div>
                  <h2 className=" text-xl font-bold">Find Us On</h2>
                  <div className="mt-3">
                        <div className="join join-vertical   flex flex-col rounded-md">
                              <button className="btn text-lg btn-outline join-item text-blue-500 "><FaFacebook className=" text-2xl"></FaFacebook> Facebook</button>
                              <button className="btn text-lg btn-outline join-item text-blue-400"><FaTwitter className=" text-2xl"></FaTwitter> Twitter</button>
                              <button className="btn text-lg btn-outline join-item text-pink-500"><FaInstagram className=" text-2xl"></FaInstagram> Instagram</button>
                        </div>
                  </div>
            </div>
      );
};

export default FindUsSocal;