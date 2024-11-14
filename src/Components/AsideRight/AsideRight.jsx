import SocalLogin from "../../Auth/SocalLogin/SocalLogin";
import FindUsSocal from "../FindUsSocal/FindUsSocal";


const AsideRight = () => {
      return (
            <div>
               <SocalLogin></SocalLogin>  
               <div className=" mt-8">
               <FindUsSocal></FindUsSocal>   
               </div>
            </div>
      );
};

export default AsideRight;