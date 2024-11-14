import { Outlet } from "react-router-dom";
import AsideLeft from "../AsideLeft/AsideLeft";
import AsideRight from "../AsideRight/AsideRight";


const HomeMainLayout = () => {
      return (
            <div className=" grid grid-cols-12 gap-8 ">
                 <div className=" col-span-2">
                  <AsideLeft></AsideLeft>
                  </div> 
                  <div className=" col-span-7">
                        <Outlet></Outlet>
                  </div>
                  <div className=" col-span-3">
                        <AsideRight></AsideRight>
                  </div>
            </div>
      );
};

export default HomeMainLayout;