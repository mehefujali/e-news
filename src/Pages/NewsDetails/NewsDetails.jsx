import { useLoaderData } from "react-router-dom";


const NewsDetails = () => {
      const data = useLoaderData()
      const news = data.data[0]
   
      

      return (
            <div>

            </div>
      );
};

export default NewsDetails;