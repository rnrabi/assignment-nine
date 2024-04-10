import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Details from "../pages/details/Details";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('../data.json')
        },
        {
          path:'/updateprofile',
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:'/contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/details/:id1',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:()=>fetch('../data.json')
        }
      ]
    },
  ]);

