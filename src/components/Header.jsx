import useTheme from "../hooks/useTheme";
import MainLogo from "./MainLogo";

import ToggleButton from "./ToggleButton";
export default function Header() {
  const { theme, changeTheme } = useTheme();
  return (
    <header className="flex items-center justify-between pr-5 ">
      <div className="flex mx-5 py-3 justify-left items-center gap-5">
        <MainLogo />
        <p className="text-green-100 font-bold text-3xl">TODO APP</p>
      </div>
      <ToggleButton isDarkMode={theme === "dark"} onClick={changeTheme} />
    </header>
  );
}
