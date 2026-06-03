import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div className="bg-green-900 dark:bg-gray-950 md:px-10 sm:px-1 lg:px-30 min-h-screen  ">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}
