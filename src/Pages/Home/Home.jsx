import { Outlet } from "react-router-dom";
import AsideLeft from "../../Components/AsideLeft/AsideLeft";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Nav from "../../Components/Nav/Nav";
import AsideRight from "../../Components/AsideRight/AsideRight";


const Home = () => {
      return (
            <div>
                  <Header></Header>
                  <LatestNews></LatestNews>
                  <Nav></Nav>
                  <main className=" container mx-auto mt-12">
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
                  </main>
            </div>
      );
};

export default Home;