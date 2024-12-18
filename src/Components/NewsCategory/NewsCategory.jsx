import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './newscategory.css'

const NewsCategory = () => {
      const [categories, setCategories] = useState([])
      useEffect(()=>{
            fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
      },[])
     
      
      return (
            <div className="p-3 md:p-0">
                  <h2 className=" text-xl font-bold ">All category</h2>
                  <div  className=" flex  flex-wrap  lg:flex-col-reverse mt-5 gap-2" id="newsCategories">
                        {
                              categories.map(category => <NavLink
                                    to={`/home/category/${category.category_id}`}
                                    className="btn btn-sm lg:btn-md bg-blue-100"                                   
                        key={category.category_id}>{category.category_name}</NavLink>)
                        }
                  </div>
                  
            </div>
      );
};

export default NewsCategory;