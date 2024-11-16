import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";

const LatestNews = () => {
      const [news , setNews] = useState([])
      
      useEffect(()=>{
            fetch('https://openapi.programming-hero.com/api/news/category/08')
            .then(res=> res.json())
            .then(data=> setNews(data.data))
            
      },[])
      
      const latestNews = [...news].filter(singleNews => singleNews.others_info.is_trending === true)
      
      
       
      return (
            <div className=" container mx-auto mt-3">
                 <div className=" flex items-center bg-blue-200  w-full">
                   <span className=" bg-blue-600 text-white px-3 py-1 md:px-6 md:py-3">Trending</span> <Marquee 
                   pauseOnHover={true}>
                        <div className=" space-x-8 text-sm md:text-xl">
                             {
                              latestNews.map(news=> <Link className="" to={`/newsdetails/${news._id}`} key={news._id}> <span className=" text-blue-600">#</span><span>{news.title}</span></Link>)
                             }
                        </div>
                        </Marquee>
                  </div> 
            </div>
      );
};

export default LatestNews;