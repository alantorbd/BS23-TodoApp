import cn from "../utils/cn";

export default function Button({ className, title, ...props }) {
  return (
    <button className={cn(" px-10 py-2  cursor-pointer", className)} {...props}>
      {title}
    </button>
  );
}
