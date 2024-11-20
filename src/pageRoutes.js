import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./component/welcome";

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
  
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
