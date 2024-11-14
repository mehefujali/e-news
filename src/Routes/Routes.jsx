import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News from "../Components/News/News";
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
                                    path: '/home/category/:id',
                                    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                                    element: <News></News>
                              }
                        ]
                  },
                  {
                        path: 'about',
                        element: <About></About>
                  },
                  {
                        path: 'career',
                        element: <Career></Career>
                  }
            ]
      }
])

export default router;