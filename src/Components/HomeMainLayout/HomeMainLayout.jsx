import AsideLeft from "../AsideLeft/AsideLeft";
import AsideRight from "../AsideRight/AsideRight";
import News from "../News/News";

const HomeMainLayout = () => {
      return (
            <div className=" grid grid-cols-12 ">
                 <div className=" col-span-3">
                  <AsideLeft></AsideLeft>
                  </div> 
                  <div className=" col-span-6">
                        <News></News>
                  </div>
                  <div className=" col-span-3">
                        <AsideRight></AsideRight>
                  </div>
            </div>
      );
};

export default HomeMainLayout;