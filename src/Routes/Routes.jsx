import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
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
                        element: <Home></Home>
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