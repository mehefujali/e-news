import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
      const newsData = useLoaderData()
      console.log(newsData);

      return (
            <div>
                  <div>
                      {
                        newsData.data.map(news=> <NewsCard key={news._id} news={news}></NewsCard> )
                      }
                  </div>
            </div>
      );
};

export default News;