import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";

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
]);
