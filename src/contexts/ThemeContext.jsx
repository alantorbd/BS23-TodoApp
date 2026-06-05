import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext({
  theme: null,
  changeTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}{" "}
    </themeContext.Provider>
  );
}
