import { Link } from "react-router";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"stats"}>Stats</Link>
        </li>
      </ul>
    </div>
  );
}
