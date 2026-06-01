import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div className="bg-green-900 px-30  h-screen">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}
