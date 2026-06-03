import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export default function ToggleButton() {
  const { theme, changeTheme } = useContext(themeContext);
  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={changeTheme}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
        isDarkMode ? "bg-blue-600" : "bg-gray-300"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 flex items-center justify-center shadow-sm ${
          isDarkMode ? "translate-x-9" : "translate-x-1"
        }`}
      >
        {isDarkMode ? (
          <svg
            className="h-4 w-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.708.707a1 1 0 01-1.414 1.415l-.707-.708a1 1 0 010-1.414zm3.78 5.68a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.32 4.22a1 1 0 010 1.415l-.707.708a1 1 0 01-1.415-1.414l.708-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.32a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.415l.707.708a1 1 0 010 1.414zm-3.78-5.68a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.32-4.22a1 1 0 010-1.415l.707-.708a1 1 0 011.415 1.414l-.708.707a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
