import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Contact from "../pages/contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/updateprofile',
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

