import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stats from "../pages/Stats";
import FeedBack404 from "../components/FeedBack404";

import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <FeedBack404 />,
  },

  {
    element: <MainLayout />,
    errorElement: <FeedBack404 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
  },
]);

export default router;
