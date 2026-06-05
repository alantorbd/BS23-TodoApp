import cn from "../utils/cn";

export default function SunIcon({ className, ...props }) {
  return (
    <svg
      className={cn("h-4 w-4 text-yellow-500", className)}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.708.707a1 1 0 01-1.414 1.415l-.707-.708a1 1 0 010-1.414zm3.78 5.68a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.32 4.22a1 1 0 010 1.415l-.707.708a1 1 0 01-1.415-1.414l.708-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.32a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.415l.707.708a1 1 0 010 1.414zm-3.78-5.68a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.32-4.22a1 1 0 010-1.415l.707-.708a1 1 0 011.415 1.414l-.708.707a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z"
        clipRule="evenodd"
      />
    </svg>
  );
}
