import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  return useContext(themeContext);
}
