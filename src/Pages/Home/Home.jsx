import Header from "../../Components/Header/Header";
import HomeMainLayout from "../../Components/HomeMainLayout/HomeMainLayout";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Nav from "../../Components/Nav/Nav";


const Home = () => {
      return (
            <div>
                  <Header></Header>
                  <LatestNews></LatestNews>
                  <Nav></Nav>
                  <div className=" container mx-auto mt-12">
                        <HomeMainLayout></HomeMainLayout>
                  </div>
            </div>
      );
};

export default Home;