import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}
