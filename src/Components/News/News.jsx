import { useLoaderData } from "react-router-dom";

const News = () => {
      const newsData = useLoaderData()
      console.log(newsData);
      
      return (
            <div>
                News  
            </div>
      );
};

export default News;