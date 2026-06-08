import { NavLink } from "react-router";
import cn from "../utils/cn";

export default function NavBar() {
  return (
    <div className="mx-5">
      <ul className=" text-x flex w-full  gap-1 items-center ">
        <NavButton to={"/home"}>Home</NavButton>
        <NavButton to={"/stats"}>Stats</NavButton>
      </ul>
    </div>
  );
}

const NavButton = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "p-1 text-green-200 hover:bg-green-800  w-1/2 text-center   ",
          isActive && "bg-green-800 border-b-3 border-green-200",
          !isActive && "bg-green-700",
        )
      }
      to={to}
    >
      <li>{children}</li>
    </NavLink>
  );
};
