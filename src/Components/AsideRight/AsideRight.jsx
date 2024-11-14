import SocalLogin from "../../Auth/SocalLogin/SocalLogin";
import FindUsSocal from "../FindUsSocal/FindUsSocal";
import Qzone from "../Qzone/Qzone";


const AsideRight = () => {
      return (
            <div>
               <SocalLogin></SocalLogin>  
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