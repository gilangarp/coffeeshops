import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Login from "./page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
        {
            path:"/",
            element:<Home/>
        }
    ],
  },
  {
    path: "login",
    element: <Login/>
  }
]);
