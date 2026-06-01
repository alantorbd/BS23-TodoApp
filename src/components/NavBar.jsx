import { NavLink } from "react-router";

export default function NavBar() {
  let navLinkCss =
    "p-1 text-green-200 hover:bg-green-800  w-1/2 text-center   ";
  return (
    <div className="mx-5">
      <ul className=" text-x flex w-full  gap-1 items-center ">
        <NavLink
          className={({ isActive }) =>
            isActive ? navLinkCss + "bg-green-800" : navLinkCss + "bg-green-700"
          }
          to={"/"}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to={"stats"}
          className={({ isActive }) =>
            isActive ? navLinkCss + "bg-green-800" : navLinkCss + "bg-green-700"
          }
        >
          <li>Stats</li>
        </NavLink>
      </ul>
    </div>
  );
}
