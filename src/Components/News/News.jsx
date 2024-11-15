import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const News = () => {
      const newsData = useLoaderData()
     
     
    
      return (
            <div className=" mb-6 px-4 md:px-0">
                  <h1 className=" text-xl font-bold mb-4">News</h1>
                  <div className=" flex flex-col gap-7">
                      {
                        newsData.length<1? <div>
                              
                        </div>:newsData.data.map(news=> <NewsCard key={news._id} news={news}></NewsCard> )
                      }
                  </div>
            </div>
      );
};

export default News;