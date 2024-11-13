import Marquee from "react-fast-marquee";

const LatestNews = () => {
      return (
            <div className=" container mx-auto mt-3">
                 <div className=" flex items-center bg-blue-200 p-2">
                   <span className=" bg-blue-600 text-white px-6 py-3">Latest</span> <Marquee 
                   pauseOnHover={true}>
                        <div className=" space-x-8 text-xl">
                        <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo dignissimos assumenda doloremque tempora perspiciatis.</a>
                        <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo dignissimos assumenda doloremque tempora perspiciatis.</a>
                        <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo dignissimos assumenda doloremque tempora perspiciatis.</a>
                        </div>
                        </Marquee>
                  </div> 
            </div>
      );
};

export default LatestNews;