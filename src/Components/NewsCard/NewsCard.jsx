import PropTypes from "prop-types";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
      

      const {
            author,

            details,
            image_url,
            _id,

            rating,

            title,
            total_view,
      } = news;
     

      return (
            <div>
                  <div className="border-2 border-blue-200">
                        <div className=" flex items-center  justify-between bg-blue-200 p-3 ">
                              <div className=" flex gap-1">
                                    <img className=" w-12 h-12 rounded-full" src={author.img} alt="" />
                                    <div>
                                          <h4 className=" font-semibold">{author.name}</h4>
                                          <p className=" text-gray-500">{author.published_date}</p>
                                    </div>
                              </div>
                              <div className=" text-2xl flex items-center gap-3 text-blue-600">
                                    <FaRegBookmark className=" cursor-pointer"></FaRegBookmark>
                                    <CiShare2 className=" font-bold cursor-pointer"></CiShare2>
                              </div>
                        </div>
                        <div className=" md:mt-4 flex flex-col gap-2 p-4">
                              <h1 className=" text-md md:text-2xl font-bold">{title}</h1>
                              <img className=" w-full   object-contain" src={image_url} alt="" />
                              <p className=" max-h-36 text-gray-500  truncate whitespace-normal " >{details}..</p>
                              <Link to={`/newsdetails/${_id}`} className=" text-blue-600 font-bold">...Read more</Link>
                        </div>
                        <div className=" divider p-4">

                        </div>
                        <div className=" p-4 flex items-center  justify-between">
                              <div className=" flex gap-1">
                                    <Rating className=" text-2xl"
                                          initialRating={rating.number}
                                          emptySymbol={<FaStar className=" text-gray-300"></FaStar>}
                                          fullSymbol={<FaStar className=" text-yellow-500"></FaStar>}
                                          readonly
                                    />
                                    <p className=" text-lg font-bold">{rating.number}</p>
                              </div>

                              <div className=" flex items-center gap-2 text-gray-500">
                                    <FaEye className=" text-2xl "></FaEye>
                                    <p>{total_view}</p>
                              </div>

                        </div>
                  </div>
            </div>
      );
};
NewsCard.propTypes = {
      news: PropTypes.object.isRequired
}
export default NewsCard;