import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

