import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import AsideRight from "../../Components/AsideRight/AsideRight";
import { FaArrowLeft } from "react-icons/fa6";
import PrivetRoute from "../../Auth/Private/PrivetRoute";
import Nav from "../../Components/Nav/Nav";


const NewsDetails = () => {
      const data = useLoaderData()
      const news = data.data[0]
      
      const {


            details,
            image_url,


            title,

            category_id
      } = news;

      return (
            <PrivetRoute>
                  <div className=" container mx-auto mb-6">
                        <ScrollRestoration></ScrollRestoration>
                        <Header></Header>
                        <Nav></Nav>
                        <div className=" grid md:grid-cols-12 gap-7 w-11/12 mx-auto md:w-full  ">
                              <div className=" md:col-span-9">
                                    <h1 className=" text-xl font-bold mt-8">E News</h1>
                                    <div className="  p-4 md:p-8 mt-4 border-2 border-blue-200 rounded">
                                          <img className=" w-full" src={image_url} alt="" />
                                          <h1 className=" md:text-2xl font-bold my-2">{title}</h1>
                                          <p>{details}</p>
                                          <Link to={`/home/category/${category_id}`} className=" flex btn  bg-blue-600 text-white hover:text-blue-600 w-fit mt-4 rounded"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                                    </div>

                              </div>
                              <div className=" md:col-span-3">
                                    <AsideRight></AsideRight>
                              </div>

                        </div>
                  </div>
            </PrivetRoute>
      );
};

export default NewsDetails;