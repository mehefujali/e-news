import { useContext } from "react";
import SocalLogin from "../../Auth/SocalLogin/SocalLogin";
import FindUsSocal from "../FindUsSocal/FindUsSocal";
import Qzone from "../Qzone/Qzone";
import { AuthContext } from "../../Context/AuthProvider";


const AsideRight = () => {
      const {user} = useContext(AuthContext)
      return (
            <div className=" px-4 md:px-0">
               {
                  user? '' : <SocalLogin></SocalLogin> 
               } 
               <div className=" mt-8">
               <FindUsSocal></FindUsSocal>   
               </div>
               <div className=" mt-8">
                  <Qzone></Qzone>
               </div>
            </div>
      );
};

export default AsideRight;