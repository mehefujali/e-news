import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsSocal = () => {
      return (
            <div>
                  <h2 className=" text-xl font-bold">Find Us On</h2>
                  <div>
                        <div className="join join-vertical  flex flex-col rounded-md">
                              <button className="btn btn-outline join-item text-blue-500 "><FaFacebook className=" text-xl"></FaFacebook> Facebook</button>
                              <button className="btn btn-outline join-item text-blue-400"><FaTwitter className=" text-xl"></FaTwitter> Twitter</button>
                              <button className="btn btn-outline join-item text-pink-500"><FaInstagram className=" text-xl"></FaInstagram> Instagram</button>
                        </div>
                  </div>
            </div>
      );
};

export default FindUsSocal;