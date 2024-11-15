import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News from "../Components/News/News";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import ForgetPassword from "../Auth/ForgetPassword/ForgetPassword";
const router = createBrowserRouter ([
      {
            path: '/',
            element:<Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Navigate to={'home'} replace></Navigate>
                  },
                  {
                        path: 'home',
                        element: <Home></Home>,
                        children: [
                              {
                                   path: '/home',
                                   element: <Navigate to='/home/category/08' replace></Navigate>
                              },
                              {
                                    path: '/home/category/:id',
                                    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                                    element: <News></News>
                              },

                        ]
                  },
                  {
                        path: 'about',
                        element: <About></About>
                  },
                  {
                        path: 'career',
                        element: <Career></Career>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path:'register',
                        element: <Register></Register>
                  },
                  {
                        path: 'newsdetails/:newsId',
                        loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
                        element: <NewsDetails></NewsDetails>
                  },
                  {
                        path:'updatepassword',
                        element:<ResetPassword></ResetPassword>
                  },
                  {
                        path:'forgetpassword',
                        element: <ForgetPassword></ForgetPassword>
                  }
            ]
      }
])

export default router;