import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stats from "../pages/Stats";
import FeedBack404 from "../components/FeedBack404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <FeedBack404 />,
    children: [
      {
        path: "/",
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
