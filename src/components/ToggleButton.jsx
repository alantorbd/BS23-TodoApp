import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

export default function ToggleButton({ isDarkMode, ...props }) {
  return (
    <button
      {...props}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
        isDarkMode ? "bg-blue-600" : "bg-gray-300"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <span
        className={` h-6 w-6 transform rounded-full bg-white transition-transform duration-300 flex items-center justify-center shadow-sm ${
          isDarkMode ? "translate-x-9" : "translate-x-1"
        }`}
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
