import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
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
                  }
            ]
      }
])

export default router;